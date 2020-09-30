/* eslint-disable */
import { ExercisePropertyValue } from '../../exercise/v1/exercise_property_value';
import { Exercise } from '../../exercise/v1/exercise';
import { PropertyType, propertyTypeFromJSON, propertyTypeToJSON } from '../../exercise/v1/exercise_property';
import { Reader, Writer } from 'protobufjs/minimal';


export interface CreateExerciseRequest {
  nameTKey: string;
  properties: ExercisePropertyValue[];
}

export interface CreateExerciseResponse {
  id: string;
}

export interface GetExerciseRequest {
  id: string;
}

export interface GetExerciseResponse {
  exercise: Exercise | undefined;
}

export interface UpdateExerciseRequest {
  id: string;
  nameTKey: string;
}

export interface UpdateExerciseResponse {
}

export interface DeleteExerciseRequest {
  id: string;
}

export interface DeleteExerciseResponse {
}

export interface CreatePropertyRequest {
  nameTKey: string;
  type: PropertyType;
}

export interface CreatePropertyResponse {
  id: string;
}

export interface UpdatePropertyRequest {
  nameTKey: string;
}

export interface UpdatePropertyResponse {
}

export interface DeletePropertyRequest {
  id: string;
}

export interface DeletePropertyResponse {
}

export interface UpdatePropertiesOfExerciseRequest {
  exerciseId: string;
  propertiesToAdd: ExercisePropertyValue[];
  propertiesToUpdate: ExercisePropertyValue[];
  propertyIdsToRemove: string[];
}

export interface UpdatePropertiesOfExerciseResponse {
}

export interface FindExercisesByPropertiesRequest {
  orConditions: FindExercisesByPropertiesRequest_OrCondition[];
}

export interface FindExercisesByPropertiesRequest_OrCondition {
  andConditions: FindExercisesByPropertiesRequest_OrCondition_AndCondition[];
}

export interface FindExercisesByPropertiesRequest_OrCondition_AndCondition {
  propertyId: string;
  propertyValue?: { $case: 'boolValue', boolValue: boolean } | { $case: 'stringValue', stringValue: string } | { $case: 'intValue', intValue: number };
}

export interface FindExercisesByPropertiesResponse {
  exercises: Exercise[];
}

const baseCreateExerciseRequest: object = {
  nameTKey: "",
};

const baseCreateExerciseResponse: object = {
  id: "",
};

const baseGetExerciseRequest: object = {
  id: "",
};

const baseGetExerciseResponse: object = {
};

const baseUpdateExerciseRequest: object = {
  id: "",
  nameTKey: "",
};

const baseUpdateExerciseResponse: object = {
};

const baseDeleteExerciseRequest: object = {
  id: "",
};

const baseDeleteExerciseResponse: object = {
};

const baseCreatePropertyRequest: object = {
  nameTKey: "",
  type: 0,
};

const baseCreatePropertyResponse: object = {
  id: "",
};

const baseUpdatePropertyRequest: object = {
  nameTKey: "",
};

const baseUpdatePropertyResponse: object = {
};

const baseDeletePropertyRequest: object = {
  id: "",
};

const baseDeletePropertyResponse: object = {
};

const baseUpdatePropertiesOfExerciseRequest: object = {
  exerciseId: "",
  propertyIdsToRemove: "",
};

const baseUpdatePropertiesOfExerciseResponse: object = {
};

const baseFindExercisesByPropertiesRequest: object = {
};

const baseFindExercisesByPropertiesRequest_OrCondition: object = {
};

const baseFindExercisesByPropertiesRequest_OrCondition_AndCondition: object = {
  propertyId: "",
};

const baseFindExercisesByPropertiesResponse: object = {
};

export interface ExerciseAPIService {

  createExercise(request: CreateExerciseRequest): Promise<CreateExerciseResponse>;

  getExercise(request: GetExerciseRequest): Promise<GetExerciseResponse>;

  updateExercise(request: UpdateExerciseRequest): Promise<UpdateExerciseResponse>;

  deleteExercise(request: DeleteExerciseRequest): Promise<DeleteExerciseResponse>;

  createProperty(request: CreatePropertyRequest): Promise<CreatePropertyResponse>;

  updateProperty(request: UpdatePropertyRequest): Promise<UpdatePropertyResponse>;

  deleteProperty(request: DeletePropertyRequest): Promise<DeletePropertyResponse>;

  updatePropertiesOfExercise(request: UpdatePropertiesOfExerciseRequest): Promise<UpdatePropertiesOfExerciseResponse>;

  findExercisesByProperties(request: FindExercisesByPropertiesRequest): Promise<FindExercisesByPropertiesResponse>;

}

export class ExerciseAPIServiceClientImpl implements ExerciseAPIService {

  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }

  createExercise(request: CreateExerciseRequest): Promise<CreateExerciseResponse> {
    const data = CreateExerciseRequest.encode(request).finish();
    const promise = this.rpc.request("exercise.v1.ExerciseAPIService", "createExercise", data);
    return promise.then(data => CreateExerciseResponse.decode(new Reader(data)));
  }

  getExercise(request: GetExerciseRequest): Promise<GetExerciseResponse> {
    const data = GetExerciseRequest.encode(request).finish();
    const promise = this.rpc.request("exercise.v1.ExerciseAPIService", "getExercise", data);
    return promise.then(data => GetExerciseResponse.decode(new Reader(data)));
  }

  updateExercise(request: UpdateExerciseRequest): Promise<UpdateExerciseResponse> {
    const data = UpdateExerciseRequest.encode(request).finish();
    const promise = this.rpc.request("exercise.v1.ExerciseAPIService", "updateExercise", data);
    return promise.then(data => UpdateExerciseResponse.decode(new Reader(data)));
  }

  deleteExercise(request: DeleteExerciseRequest): Promise<DeleteExerciseResponse> {
    const data = DeleteExerciseRequest.encode(request).finish();
    const promise = this.rpc.request("exercise.v1.ExerciseAPIService", "deleteExercise", data);
    return promise.then(data => DeleteExerciseResponse.decode(new Reader(data)));
  }

  createProperty(request: CreatePropertyRequest): Promise<CreatePropertyResponse> {
    const data = CreatePropertyRequest.encode(request).finish();
    const promise = this.rpc.request("exercise.v1.ExerciseAPIService", "createProperty", data);
    return promise.then(data => CreatePropertyResponse.decode(new Reader(data)));
  }

  updateProperty(request: UpdatePropertyRequest): Promise<UpdatePropertyResponse> {
    const data = UpdatePropertyRequest.encode(request).finish();
    const promise = this.rpc.request("exercise.v1.ExerciseAPIService", "updateProperty", data);
    return promise.then(data => UpdatePropertyResponse.decode(new Reader(data)));
  }

  deleteProperty(request: DeletePropertyRequest): Promise<DeletePropertyResponse> {
    const data = DeletePropertyRequest.encode(request).finish();
    const promise = this.rpc.request("exercise.v1.ExerciseAPIService", "deleteProperty", data);
    return promise.then(data => DeletePropertyResponse.decode(new Reader(data)));
  }

  updatePropertiesOfExercise(request: UpdatePropertiesOfExerciseRequest): Promise<UpdatePropertiesOfExerciseResponse> {
    const data = UpdatePropertiesOfExerciseRequest.encode(request).finish();
    const promise = this.rpc.request("exercise.v1.ExerciseAPIService", "updatePropertiesOfExercise", data);
    return promise.then(data => UpdatePropertiesOfExerciseResponse.decode(new Reader(data)));
  }

  findExercisesByProperties(request: FindExercisesByPropertiesRequest): Promise<FindExercisesByPropertiesResponse> {
    const data = FindExercisesByPropertiesRequest.encode(request).finish();
    const promise = this.rpc.request("exercise.v1.ExerciseAPIService", "findExercisesByProperties", data);
    return promise.then(data => FindExercisesByPropertiesResponse.decode(new Reader(data)));
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

export const CreateExerciseRequest = {
  encode(message: CreateExerciseRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.nameTKey);
    for (const v of message.properties) {
      ExercisePropertyValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CreateExerciseRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateExerciseRequest } as CreateExerciseRequest;
    message.properties = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nameTKey = reader.string();
          break;
        case 2:
          message.properties.push(ExercisePropertyValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateExerciseRequest {
    const message = { ...baseCreateExerciseRequest } as CreateExerciseRequest;
    message.properties = [];
    if (object.nameTKey !== undefined && object.nameTKey !== null) {
      message.nameTKey = String(object.nameTKey);
    }
    if (object.properties !== undefined && object.properties !== null) {
      for (const e of object.properties) {
        message.properties.push(ExercisePropertyValue.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<CreateExerciseRequest>): CreateExerciseRequest {
    const message = { ...baseCreateExerciseRequest } as CreateExerciseRequest;
    message.properties = [];
    if (object.nameTKey !== undefined && object.nameTKey !== null) {
      message.nameTKey = object.nameTKey;
    }
    if (object.properties !== undefined && object.properties !== null) {
      for (const e of object.properties) {
        message.properties.push(ExercisePropertyValue.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: CreateExerciseRequest): unknown {
    const obj: any = {};
    message.nameTKey !== undefined && (obj.nameTKey = message.nameTKey);
    if (message.properties) {
      obj.properties = message.properties.map(e => e ? ExercisePropertyValue.toJSON(e) : undefined);
    } else {
      obj.properties = [];
    }
    return obj;
  },
};

export const CreateExerciseResponse = {
  encode(message: CreateExerciseResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CreateExerciseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreateExerciseResponse } as CreateExerciseResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreateExerciseResponse {
    const message = { ...baseCreateExerciseResponse } as CreateExerciseResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    }
    return message;
  },
  fromPartial(object: DeepPartial<CreateExerciseResponse>): CreateExerciseResponse {
    const message = { ...baseCreateExerciseResponse } as CreateExerciseResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toJSON(message: CreateExerciseResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

export const GetExerciseRequest = {
  encode(message: GetExerciseRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GetExerciseRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetExerciseRequest } as GetExerciseRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetExerciseRequest {
    const message = { ...baseGetExerciseRequest } as GetExerciseRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetExerciseRequest>): GetExerciseRequest {
    const message = { ...baseGetExerciseRequest } as GetExerciseRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toJSON(message: GetExerciseRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

export const GetExerciseResponse = {
  encode(message: GetExerciseResponse, writer: Writer = Writer.create()): Writer {
    if (message.exercise !== undefined && message.exercise !== undefined) {
      Exercise.encode(message.exercise, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): GetExerciseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGetExerciseResponse } as GetExerciseResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exercise = Exercise.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GetExerciseResponse {
    const message = { ...baseGetExerciseResponse } as GetExerciseResponse;
    if (object.exercise !== undefined && object.exercise !== null) {
      message.exercise = Exercise.fromJSON(object.exercise);
    }
    return message;
  },
  fromPartial(object: DeepPartial<GetExerciseResponse>): GetExerciseResponse {
    const message = { ...baseGetExerciseResponse } as GetExerciseResponse;
    if (object.exercise !== undefined && object.exercise !== null) {
      message.exercise = Exercise.fromPartial(object.exercise);
    }
    return message;
  },
  toJSON(message: GetExerciseResponse): unknown {
    const obj: any = {};
    message.exercise !== undefined && (obj.exercise = message.exercise ? Exercise.toJSON(message.exercise) : undefined);
    return obj;
  },
};

export const UpdateExerciseRequest = {
  encode(message: UpdateExerciseRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.nameTKey);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): UpdateExerciseRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateExerciseRequest } as UpdateExerciseRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.nameTKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdateExerciseRequest {
    const message = { ...baseUpdateExerciseRequest } as UpdateExerciseRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    }
    if (object.nameTKey !== undefined && object.nameTKey !== null) {
      message.nameTKey = String(object.nameTKey);
    }
    return message;
  },
  fromPartial(object: DeepPartial<UpdateExerciseRequest>): UpdateExerciseRequest {
    const message = { ...baseUpdateExerciseRequest } as UpdateExerciseRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.nameTKey !== undefined && object.nameTKey !== null) {
      message.nameTKey = object.nameTKey;
    }
    return message;
  },
  toJSON(message: UpdateExerciseRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.nameTKey !== undefined && (obj.nameTKey = message.nameTKey);
    return obj;
  },
};

export const UpdateExerciseResponse = {
  encode(_: UpdateExerciseResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): UpdateExerciseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdateExerciseResponse } as UpdateExerciseResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): UpdateExerciseResponse {
    const message = { ...baseUpdateExerciseResponse } as UpdateExerciseResponse;
    return message;
  },
  fromPartial(_: DeepPartial<UpdateExerciseResponse>): UpdateExerciseResponse {
    const message = { ...baseUpdateExerciseResponse } as UpdateExerciseResponse;
    return message;
  },
  toJSON(_: UpdateExerciseResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

export const DeleteExerciseRequest = {
  encode(message: DeleteExerciseRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): DeleteExerciseRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteExerciseRequest } as DeleteExerciseRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DeleteExerciseRequest {
    const message = { ...baseDeleteExerciseRequest } as DeleteExerciseRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    }
    return message;
  },
  fromPartial(object: DeepPartial<DeleteExerciseRequest>): DeleteExerciseRequest {
    const message = { ...baseDeleteExerciseRequest } as DeleteExerciseRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toJSON(message: DeleteExerciseRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

export const DeleteExerciseResponse = {
  encode(_: DeleteExerciseResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): DeleteExerciseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeleteExerciseResponse } as DeleteExerciseResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): DeleteExerciseResponse {
    const message = { ...baseDeleteExerciseResponse } as DeleteExerciseResponse;
    return message;
  },
  fromPartial(_: DeepPartial<DeleteExerciseResponse>): DeleteExerciseResponse {
    const message = { ...baseDeleteExerciseResponse } as DeleteExerciseResponse;
    return message;
  },
  toJSON(_: DeleteExerciseResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

export const CreatePropertyRequest = {
  encode(message: CreatePropertyRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.nameTKey);
    writer.uint32(16).int32(message.type);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CreatePropertyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreatePropertyRequest } as CreatePropertyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nameTKey = reader.string();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreatePropertyRequest {
    const message = { ...baseCreatePropertyRequest } as CreatePropertyRequest;
    if (object.nameTKey !== undefined && object.nameTKey !== null) {
      message.nameTKey = String(object.nameTKey);
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = propertyTypeFromJSON(object.type);
    }
    return message;
  },
  fromPartial(object: DeepPartial<CreatePropertyRequest>): CreatePropertyRequest {
    const message = { ...baseCreatePropertyRequest } as CreatePropertyRequest;
    if (object.nameTKey !== undefined && object.nameTKey !== null) {
      message.nameTKey = object.nameTKey;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    return message;
  },
  toJSON(message: CreatePropertyRequest): unknown {
    const obj: any = {};
    message.nameTKey !== undefined && (obj.nameTKey = message.nameTKey);
    message.type !== undefined && (obj.type = propertyTypeToJSON(message.type));
    return obj;
  },
};

export const CreatePropertyResponse = {
  encode(message: CreatePropertyResponse, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): CreatePropertyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCreatePropertyResponse } as CreatePropertyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CreatePropertyResponse {
    const message = { ...baseCreatePropertyResponse } as CreatePropertyResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    }
    return message;
  },
  fromPartial(object: DeepPartial<CreatePropertyResponse>): CreatePropertyResponse {
    const message = { ...baseCreatePropertyResponse } as CreatePropertyResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toJSON(message: CreatePropertyResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

export const UpdatePropertyRequest = {
  encode(message: UpdatePropertyRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.nameTKey);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): UpdatePropertyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdatePropertyRequest } as UpdatePropertyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nameTKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdatePropertyRequest {
    const message = { ...baseUpdatePropertyRequest } as UpdatePropertyRequest;
    if (object.nameTKey !== undefined && object.nameTKey !== null) {
      message.nameTKey = String(object.nameTKey);
    }
    return message;
  },
  fromPartial(object: DeepPartial<UpdatePropertyRequest>): UpdatePropertyRequest {
    const message = { ...baseUpdatePropertyRequest } as UpdatePropertyRequest;
    if (object.nameTKey !== undefined && object.nameTKey !== null) {
      message.nameTKey = object.nameTKey;
    }
    return message;
  },
  toJSON(message: UpdatePropertyRequest): unknown {
    const obj: any = {};
    message.nameTKey !== undefined && (obj.nameTKey = message.nameTKey);
    return obj;
  },
};

export const UpdatePropertyResponse = {
  encode(_: UpdatePropertyResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): UpdatePropertyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdatePropertyResponse } as UpdatePropertyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): UpdatePropertyResponse {
    const message = { ...baseUpdatePropertyResponse } as UpdatePropertyResponse;
    return message;
  },
  fromPartial(_: DeepPartial<UpdatePropertyResponse>): UpdatePropertyResponse {
    const message = { ...baseUpdatePropertyResponse } as UpdatePropertyResponse;
    return message;
  },
  toJSON(_: UpdatePropertyResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

export const DeletePropertyRequest = {
  encode(message: DeletePropertyRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): DeletePropertyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeletePropertyRequest } as DeletePropertyRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DeletePropertyRequest {
    const message = { ...baseDeletePropertyRequest } as DeletePropertyRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    }
    return message;
  },
  fromPartial(object: DeepPartial<DeletePropertyRequest>): DeletePropertyRequest {
    const message = { ...baseDeletePropertyRequest } as DeletePropertyRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    return message;
  },
  toJSON(message: DeletePropertyRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },
};

export const DeletePropertyResponse = {
  encode(_: DeletePropertyResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): DeletePropertyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDeletePropertyResponse } as DeletePropertyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): DeletePropertyResponse {
    const message = { ...baseDeletePropertyResponse } as DeletePropertyResponse;
    return message;
  },
  fromPartial(_: DeepPartial<DeletePropertyResponse>): DeletePropertyResponse {
    const message = { ...baseDeletePropertyResponse } as DeletePropertyResponse;
    return message;
  },
  toJSON(_: DeletePropertyResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

export const UpdatePropertiesOfExerciseRequest = {
  encode(message: UpdatePropertiesOfExerciseRequest, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.exerciseId);
    for (const v of message.propertiesToAdd) {
      ExercisePropertyValue.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.propertiesToUpdate) {
      ExercisePropertyValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.propertyIdsToRemove) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): UpdatePropertiesOfExerciseRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdatePropertiesOfExerciseRequest } as UpdatePropertiesOfExerciseRequest;
    message.propertiesToAdd = [];
    message.propertiesToUpdate = [];
    message.propertyIdsToRemove = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exerciseId = reader.string();
          break;
        case 2:
          message.propertiesToAdd.push(ExercisePropertyValue.decode(reader, reader.uint32()));
          break;
        case 3:
          message.propertiesToUpdate.push(ExercisePropertyValue.decode(reader, reader.uint32()));
          break;
        case 4:
          message.propertyIdsToRemove.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): UpdatePropertiesOfExerciseRequest {
    const message = { ...baseUpdatePropertiesOfExerciseRequest } as UpdatePropertiesOfExerciseRequest;
    message.propertiesToAdd = [];
    message.propertiesToUpdate = [];
    message.propertyIdsToRemove = [];
    if (object.exerciseId !== undefined && object.exerciseId !== null) {
      message.exerciseId = String(object.exerciseId);
    }
    if (object.propertiesToAdd !== undefined && object.propertiesToAdd !== null) {
      for (const e of object.propertiesToAdd) {
        message.propertiesToAdd.push(ExercisePropertyValue.fromJSON(e));
      }
    }
    if (object.propertiesToUpdate !== undefined && object.propertiesToUpdate !== null) {
      for (const e of object.propertiesToUpdate) {
        message.propertiesToUpdate.push(ExercisePropertyValue.fromJSON(e));
      }
    }
    if (object.propertyIdsToRemove !== undefined && object.propertyIdsToRemove !== null) {
      for (const e of object.propertyIdsToRemove) {
        message.propertyIdsToRemove.push(String(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UpdatePropertiesOfExerciseRequest>): UpdatePropertiesOfExerciseRequest {
    const message = { ...baseUpdatePropertiesOfExerciseRequest } as UpdatePropertiesOfExerciseRequest;
    message.propertiesToAdd = [];
    message.propertiesToUpdate = [];
    message.propertyIdsToRemove = [];
    if (object.exerciseId !== undefined && object.exerciseId !== null) {
      message.exerciseId = object.exerciseId;
    }
    if (object.propertiesToAdd !== undefined && object.propertiesToAdd !== null) {
      for (const e of object.propertiesToAdd) {
        message.propertiesToAdd.push(ExercisePropertyValue.fromPartial(e));
      }
    }
    if (object.propertiesToUpdate !== undefined && object.propertiesToUpdate !== null) {
      for (const e of object.propertiesToUpdate) {
        message.propertiesToUpdate.push(ExercisePropertyValue.fromPartial(e));
      }
    }
    if (object.propertyIdsToRemove !== undefined && object.propertyIdsToRemove !== null) {
      for (const e of object.propertyIdsToRemove) {
        message.propertyIdsToRemove.push(e);
      }
    }
    return message;
  },
  toJSON(message: UpdatePropertiesOfExerciseRequest): unknown {
    const obj: any = {};
    message.exerciseId !== undefined && (obj.exerciseId = message.exerciseId);
    if (message.propertiesToAdd) {
      obj.propertiesToAdd = message.propertiesToAdd.map(e => e ? ExercisePropertyValue.toJSON(e) : undefined);
    } else {
      obj.propertiesToAdd = [];
    }
    if (message.propertiesToUpdate) {
      obj.propertiesToUpdate = message.propertiesToUpdate.map(e => e ? ExercisePropertyValue.toJSON(e) : undefined);
    } else {
      obj.propertiesToUpdate = [];
    }
    if (message.propertyIdsToRemove) {
      obj.propertyIdsToRemove = message.propertyIdsToRemove.map(e => e);
    } else {
      obj.propertyIdsToRemove = [];
    }
    return obj;
  },
};

export const UpdatePropertiesOfExerciseResponse = {
  encode(_: UpdatePropertiesOfExerciseResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): UpdatePropertiesOfExerciseResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUpdatePropertiesOfExerciseResponse } as UpdatePropertiesOfExerciseResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): UpdatePropertiesOfExerciseResponse {
    const message = { ...baseUpdatePropertiesOfExerciseResponse } as UpdatePropertiesOfExerciseResponse;
    return message;
  },
  fromPartial(_: DeepPartial<UpdatePropertiesOfExerciseResponse>): UpdatePropertiesOfExerciseResponse {
    const message = { ...baseUpdatePropertiesOfExerciseResponse } as UpdatePropertiesOfExerciseResponse;
    return message;
  },
  toJSON(_: UpdatePropertiesOfExerciseResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

export const FindExercisesByPropertiesRequest = {
  encode(message: FindExercisesByPropertiesRequest, writer: Writer = Writer.create()): Writer {
    for (const v of message.orConditions) {
      FindExercisesByPropertiesRequest_OrCondition.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): FindExercisesByPropertiesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFindExercisesByPropertiesRequest } as FindExercisesByPropertiesRequest;
    message.orConditions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orConditions.push(FindExercisesByPropertiesRequest_OrCondition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FindExercisesByPropertiesRequest {
    const message = { ...baseFindExercisesByPropertiesRequest } as FindExercisesByPropertiesRequest;
    message.orConditions = [];
    if (object.orConditions !== undefined && object.orConditions !== null) {
      for (const e of object.orConditions) {
        message.orConditions.push(FindExercisesByPropertiesRequest_OrCondition.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FindExercisesByPropertiesRequest>): FindExercisesByPropertiesRequest {
    const message = { ...baseFindExercisesByPropertiesRequest } as FindExercisesByPropertiesRequest;
    message.orConditions = [];
    if (object.orConditions !== undefined && object.orConditions !== null) {
      for (const e of object.orConditions) {
        message.orConditions.push(FindExercisesByPropertiesRequest_OrCondition.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: FindExercisesByPropertiesRequest): unknown {
    const obj: any = {};
    if (message.orConditions) {
      obj.orConditions = message.orConditions.map(e => e ? FindExercisesByPropertiesRequest_OrCondition.toJSON(e) : undefined);
    } else {
      obj.orConditions = [];
    }
    return obj;
  },
};

export const FindExercisesByPropertiesRequest_OrCondition = {
  encode(message: FindExercisesByPropertiesRequest_OrCondition, writer: Writer = Writer.create()): Writer {
    for (const v of message.andConditions) {
      FindExercisesByPropertiesRequest_OrCondition_AndCondition.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): FindExercisesByPropertiesRequest_OrCondition {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFindExercisesByPropertiesRequest_OrCondition } as FindExercisesByPropertiesRequest_OrCondition;
    message.andConditions = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.andConditions.push(FindExercisesByPropertiesRequest_OrCondition_AndCondition.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FindExercisesByPropertiesRequest_OrCondition {
    const message = { ...baseFindExercisesByPropertiesRequest_OrCondition } as FindExercisesByPropertiesRequest_OrCondition;
    message.andConditions = [];
    if (object.andConditions !== undefined && object.andConditions !== null) {
      for (const e of object.andConditions) {
        message.andConditions.push(FindExercisesByPropertiesRequest_OrCondition_AndCondition.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FindExercisesByPropertiesRequest_OrCondition>): FindExercisesByPropertiesRequest_OrCondition {
    const message = { ...baseFindExercisesByPropertiesRequest_OrCondition } as FindExercisesByPropertiesRequest_OrCondition;
    message.andConditions = [];
    if (object.andConditions !== undefined && object.andConditions !== null) {
      for (const e of object.andConditions) {
        message.andConditions.push(FindExercisesByPropertiesRequest_OrCondition_AndCondition.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: FindExercisesByPropertiesRequest_OrCondition): unknown {
    const obj: any = {};
    if (message.andConditions) {
      obj.andConditions = message.andConditions.map(e => e ? FindExercisesByPropertiesRequest_OrCondition_AndCondition.toJSON(e) : undefined);
    } else {
      obj.andConditions = [];
    }
    return obj;
  },
};

export const FindExercisesByPropertiesRequest_OrCondition_AndCondition = {
  encode(message: FindExercisesByPropertiesRequest_OrCondition_AndCondition, writer: Writer = Writer.create()): Writer {
    writer.uint32(26).string(message.propertyId);
    if (message.propertyValue?.$case === 'boolValue') {
      writer.uint32(32).bool(message.propertyValue.boolValue);
    }
    if (message.propertyValue?.$case === 'stringValue') {
      writer.uint32(42).string(message.propertyValue.stringValue);
    }
    if (message.propertyValue?.$case === 'intValue') {
      writer.uint32(48).int32(message.propertyValue.intValue);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): FindExercisesByPropertiesRequest_OrCondition_AndCondition {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFindExercisesByPropertiesRequest_OrCondition_AndCondition } as FindExercisesByPropertiesRequest_OrCondition_AndCondition;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.propertyId = reader.string();
          break;
        case 4:
          message.propertyValue = {$case: 'boolValue', boolValue: reader.bool()};
          break;
        case 5:
          message.propertyValue = {$case: 'stringValue', stringValue: reader.string()};
          break;
        case 6:
          message.propertyValue = {$case: 'intValue', intValue: reader.int32()};
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FindExercisesByPropertiesRequest_OrCondition_AndCondition {
    const message = { ...baseFindExercisesByPropertiesRequest_OrCondition_AndCondition } as FindExercisesByPropertiesRequest_OrCondition_AndCondition;
    if (object.propertyId !== undefined && object.propertyId !== null) {
      message.propertyId = String(object.propertyId);
    }
    if (object.boolValue !== undefined && object.boolValue !== null) {
      message.propertyValue = {$case: 'boolValue', boolValue: Boolean(object.boolValue)};
    }
    if (object.stringValue !== undefined && object.stringValue !== null) {
      message.propertyValue = {$case: 'stringValue', stringValue: String(object.stringValue)};
    }
    if (object.intValue !== undefined && object.intValue !== null) {
      message.propertyValue = {$case: 'intValue', intValue: Number(object.intValue)};
    }
    return message;
  },
  fromPartial(object: DeepPartial<FindExercisesByPropertiesRequest_OrCondition_AndCondition>): FindExercisesByPropertiesRequest_OrCondition_AndCondition {
    const message = { ...baseFindExercisesByPropertiesRequest_OrCondition_AndCondition } as FindExercisesByPropertiesRequest_OrCondition_AndCondition;
    if (object.propertyId !== undefined && object.propertyId !== null) {
      message.propertyId = object.propertyId;
    }
    if (object.propertyValue?.$case === 'boolValue' && object.propertyValue?.boolValue !== undefined && object.propertyValue?.boolValue !== null) {
      message.propertyValue = {$case: 'boolValue', boolValue: object.propertyValue.boolValue};
    }
    if (object.propertyValue?.$case === 'stringValue' && object.propertyValue?.stringValue !== undefined && object.propertyValue?.stringValue !== null) {
      message.propertyValue = {$case: 'stringValue', stringValue: object.propertyValue.stringValue};
    }
    if (object.propertyValue?.$case === 'intValue' && object.propertyValue?.intValue !== undefined && object.propertyValue?.intValue !== null) {
      message.propertyValue = {$case: 'intValue', intValue: object.propertyValue.intValue};
    }
    return message;
  },
  toJSON(message: FindExercisesByPropertiesRequest_OrCondition_AndCondition): unknown {
    const obj: any = {};
    message.propertyId !== undefined && (obj.propertyId = message.propertyId);
    message.propertyValue?.$case === 'boolValue' && (obj.boolValue = message.propertyValue?.boolValue);
    message.propertyValue?.$case === 'stringValue' && (obj.stringValue = message.propertyValue?.stringValue);
    message.propertyValue?.$case === 'intValue' && (obj.intValue = message.propertyValue?.intValue);
    return obj;
  },
};

export const FindExercisesByPropertiesResponse = {
  encode(message: FindExercisesByPropertiesResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.exercises) {
      Exercise.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): FindExercisesByPropertiesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFindExercisesByPropertiesResponse } as FindExercisesByPropertiesResponse;
    message.exercises = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exercises.push(Exercise.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FindExercisesByPropertiesResponse {
    const message = { ...baseFindExercisesByPropertiesResponse } as FindExercisesByPropertiesResponse;
    message.exercises = [];
    if (object.exercises !== undefined && object.exercises !== null) {
      for (const e of object.exercises) {
        message.exercises.push(Exercise.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<FindExercisesByPropertiesResponse>): FindExercisesByPropertiesResponse {
    const message = { ...baseFindExercisesByPropertiesResponse } as FindExercisesByPropertiesResponse;
    message.exercises = [];
    if (object.exercises !== undefined && object.exercises !== null) {
      for (const e of object.exercises) {
        message.exercises.push(Exercise.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: FindExercisesByPropertiesResponse): unknown {
    const obj: any = {};
    if (message.exercises) {
      obj.exercises = message.exercises.map(e => e ? Exercise.toJSON(e) : undefined);
    } else {
      obj.exercises = [];
    }
    return obj;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string }
  ? { [K in keyof Omit<T, '$case'>]?: DeepPartial<T[K]> } & { $case: T['$case'] }
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;