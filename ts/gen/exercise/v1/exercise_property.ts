/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';


export interface ExerciseProperty {
  id: string;
  nameTKey: string;
  type: PropertyType;
}

const baseExerciseProperty: object = {
  id: "",
  nameTKey: "",
  type: 0,
};

export enum PropertyType {
  PROPERTY_TYPE_UNSPECIFIED = 0,
  PROPERTY_TYPE_BOOL = 1,
  PROPERTY_TYPE_STRING = 2,
  PROPERTY_TYPE_STRING_LIST = 3,
  PROPERTY_TYPE_INT = 4,
  PROPERTY_TYPE_INT_PAIR = 5,
  UNRECOGNIZED = -1,
}

export function propertyTypeFromJSON(object: any): PropertyType {
  switch (object) {
    case 0:
    case "PROPERTY_TYPE_UNSPECIFIED":
      return PropertyType.PROPERTY_TYPE_UNSPECIFIED;
    case 1:
    case "PROPERTY_TYPE_BOOL":
      return PropertyType.PROPERTY_TYPE_BOOL;
    case 2:
    case "PROPERTY_TYPE_STRING":
      return PropertyType.PROPERTY_TYPE_STRING;
    case 3:
    case "PROPERTY_TYPE_STRING_LIST":
      return PropertyType.PROPERTY_TYPE_STRING_LIST;
    case 4:
    case "PROPERTY_TYPE_INT":
      return PropertyType.PROPERTY_TYPE_INT;
    case 5:
    case "PROPERTY_TYPE_INT_PAIR":
      return PropertyType.PROPERTY_TYPE_INT_PAIR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PropertyType.UNRECOGNIZED;
  }
}

export function propertyTypeToJSON(object: PropertyType): string {
  switch (object) {
    case PropertyType.PROPERTY_TYPE_UNSPECIFIED:
      return "PROPERTY_TYPE_UNSPECIFIED";
    case PropertyType.PROPERTY_TYPE_BOOL:
      return "PROPERTY_TYPE_BOOL";
    case PropertyType.PROPERTY_TYPE_STRING:
      return "PROPERTY_TYPE_STRING";
    case PropertyType.PROPERTY_TYPE_STRING_LIST:
      return "PROPERTY_TYPE_STRING_LIST";
    case PropertyType.PROPERTY_TYPE_INT:
      return "PROPERTY_TYPE_INT";
    case PropertyType.PROPERTY_TYPE_INT_PAIR:
      return "PROPERTY_TYPE_INT_PAIR";
    default:
      return "UNKNOWN";
  }
}

export const ExerciseProperty = {
  encode(message: ExerciseProperty, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(18).string(message.nameTKey);
    writer.uint32(24).int32(message.type);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ExerciseProperty {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExerciseProperty } as ExerciseProperty;
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
          message.type = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExerciseProperty {
    const message = { ...baseExerciseProperty } as ExerciseProperty;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    }
    if (object.nameTKey !== undefined && object.nameTKey !== null) {
      message.nameTKey = String(object.nameTKey);
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = propertyTypeFromJSON(object.type);
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExerciseProperty>): ExerciseProperty {
    const message = { ...baseExerciseProperty } as ExerciseProperty;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (object.nameTKey !== undefined && object.nameTKey !== null) {
      message.nameTKey = object.nameTKey;
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    return message;
  },
  toJSON(message: ExerciseProperty): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.nameTKey !== undefined && (obj.nameTKey = message.nameTKey);
    message.type !== undefined && (obj.type = propertyTypeToJSON(message.type));
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