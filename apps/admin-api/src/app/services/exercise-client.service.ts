import { Injectable } from '@nestjs/common';
import { credentials } from 'grpc';
import { GetExerciseRequest } from 'protobuf/gen/ts/exercise/v1/exercise_api_pb';
import { Exercise as ExerciseMessage } from 'protobuf/gen/ts/exercise/v1/exercise_pb';
import { PropertyValue as PropertyValueMessage } from 'protobuf/gen/ts/exercise/v1/property_value_pb';
import { PropertyType } from 'protobuf/gen/ts/exercise/v1/property_pb';
import { ExerciseAPIClient } from '../../../../../protobuf/gen/ts/exercise/v1/exercise_api_grpc_pb';
import { Exercise, PropertyValue } from '../types';
import { ConfigService } from './config.service';

@Injectable()
export class ExerciseClientService {
  private readonly serverConnectionString: string;

  constructor(configService: ConfigService) {
    const cfg = configService.getConfig();

    this.serverConnectionString = cfg.grpcServer;
  }

  public async getExercise(params: {
    readonly name: string;
  }): Promise<Exercise> {
    return new Promise<Exercise>((resolve, reject) => {
      const { name } = params;
      const grpcClient = new ExerciseAPIClient(
        this.serverConnectionString,
        credentials.createInsecure()
      );
      const req = new GetExerciseRequest();

      req.setName(name);
      grpcClient.getExercise(req, (err, resp) => {
        if (err || !resp || !resp.hasExercise()) {
          reject(err);

          return;
        }

        const message = resp.getExercise() as ExerciseMessage;
        const propertyValues = message
          .getPropertyValuesList()
          .map((pvm) => this.convertPropertyValue(pvm));

        resolve({
          propertyValues,
          name: message.getName(),
        });
      });
    });
  }

  private convertPropertyValue(m: PropertyValueMessage): PropertyValue {
    const p = m.getProperty();
    const v = m.getValue();
    const name = p?.getName() || '';
    const type = p?.getType();

    if (type === PropertyType.PROPERTY_TYPE_INT) {
      return {
        property: { name, type: 'number' },
        value: v?.getIntValue() || 0,
      };
    }

    if (type === PropertyType.PROPERTY_TYPE_BOOL) {
      return {
        property: { name, type: 'bool' },
        value: v?.getBoolValue() || false,
      };
    }

    if (type === PropertyType.PROPERTY_TYPE_STRING_LIST) {
      return {
        property: { name, type: 'stringList' },
        value: v?.getStringListValue()?.getValuesList() || [],
      };
    }

    if (type === PropertyType.PROPERTY_TYPE_INT_PAIR) {
      return {
        property: { name, type: 'numberPair' },
        value: {
          lower: v?.getIntPairValue()?.getLowerValue() || 0,
          higher: v?.getIntPairValue()?.getHigherValue() || 0,
        },
      };
    }

    return {
      property: { name, type: 'string' },
      value: v?.getStringValue() || '',
    };
  }
}
