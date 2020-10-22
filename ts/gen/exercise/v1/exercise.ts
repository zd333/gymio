/* eslint-disable */
import { ExercisePropertyValue } from '../../exercise/v1/exercise_property_value';
import { Writer, Reader } from 'protobufjs/minimal';


export interface Exercise {
  id: string;
  nameTKey: string;
  propertyValues: ExercisePropertyValue[];
}

const baseExercise: object = {
  id: "",
  nameTKey: "",
};

export const Exercise = {
  encode(message: Exercise, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.nameTKey);
    for (const v of message.propertyValues) {
      ExercisePropertyValue.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): Exercise {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExercise } as Exercise;
    message.propertyValues = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.nameTKey = reader.string();
          break;
        case 3:
          message.propertyValues.push(ExercisePropertyValue.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Exercise {
    const message = { ...baseExercise } as Exercise;
    message.propertyValues = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    }
    if (object.nameTKey !== undefined && object.nameTKey !== null) {
      message.nameTKey = String(object.nameTKey);
    }
    if (object.propertyValues !== undefined && object.propertyValues !== null) {
      for (const e of object.propertyValues) {
        message.propertyValues.push(ExercisePropertyValue.fromJSON(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<Exercise>): Exercise {
    const message = { ...baseExercise } as Exercise;
    message.propertyValues = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.nameTKey !== undefined && object.nameTKey !== null) {
      message.nameTKey = object.nameTKey;
    }
    if (object.propertyValues !== undefined && object.propertyValues !== null) {
      for (const e of object.propertyValues) {
        message.propertyValues.push(ExercisePropertyValue.fromPartial(e));
      }
    }
    return message;
  },
  toJSON(message: Exercise): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.nameTKey !== undefined && (obj.nameTKey = message.nameTKey);
    if (message.propertyValues) {
      obj.propertyValues = message.propertyValues.map(e => e ? ExercisePropertyValue.toJSON(e) : undefined);
    } else {
      obj.propertyValues = [];
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