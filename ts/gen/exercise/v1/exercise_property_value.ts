/* eslint-disable */
import { ExerciseProperty } from '../../exercise/v1/exercise_property';
import { Writer, Reader } from 'protobufjs/minimal';


export interface ExercisePropertyValue {
  property: ExerciseProperty | undefined;
  value: ExercisePropertyValueUnion | undefined;
}

export interface ExercisePropertyValueUnion {
  either?: { $case: 'boolValue', boolValue: boolean } | { $case: 'stringValue', stringValue: string } | { $case: 'stringListValue', stringListValue: StringListExercisePropertyValue } | { $case: 'intValue', intValue: number } | { $case: 'intPairValue', intPairValue: IntPairExercisePropertyValue };
}

export interface StringListExercisePropertyValue {
  values: string[];
}

export interface IntPairExercisePropertyValue {
  loverValue: number;
  higherValue: number;
}

const baseExercisePropertyValue: object = {
};

const baseExercisePropertyValueUnion: object = {
};

const baseStringListExercisePropertyValue: object = {
  values: "",
};

const baseIntPairExercisePropertyValue: object = {
  loverValue: 0,
  higherValue: 0,
};

export const ExercisePropertyValue = {
  encode(message: ExercisePropertyValue, writer: Writer = Writer.create()): Writer {
    if (message.property !== undefined && message.property !== undefined) {
      ExerciseProperty.encode(message.property, writer.uint32(10).fork()).ldelim();
    }
    if (message.value !== undefined && message.value !== undefined) {
      ExercisePropertyValueUnion.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ExercisePropertyValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExercisePropertyValue } as ExercisePropertyValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.property = ExerciseProperty.decode(reader, reader.uint32());
          break;
        case 2:
          message.value = ExercisePropertyValueUnion.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExercisePropertyValue {
    const message = { ...baseExercisePropertyValue } as ExercisePropertyValue;
    if (object.property !== undefined && object.property !== null) {
      message.property = ExerciseProperty.fromJSON(object.property);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ExercisePropertyValueUnion.fromJSON(object.value);
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExercisePropertyValue>): ExercisePropertyValue {
    const message = { ...baseExercisePropertyValue } as ExercisePropertyValue;
    if (object.property !== undefined && object.property !== null) {
      message.property = ExerciseProperty.fromPartial(object.property);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ExercisePropertyValueUnion.fromPartial(object.value);
    }
    return message;
  },
  toJSON(message: ExercisePropertyValue): unknown {
    const obj: any = {};
    message.property !== undefined && (obj.property = message.property ? ExerciseProperty.toJSON(message.property) : undefined);
    message.value !== undefined && (obj.value = message.value ? ExercisePropertyValueUnion.toJSON(message.value) : undefined);
    return obj;
  },
};

export const ExercisePropertyValueUnion = {
  encode(message: ExercisePropertyValueUnion, writer: Writer = Writer.create()): Writer {
    if (message.either?.$case === 'boolValue') {
      writer.uint32(8).bool(message.either.boolValue);
    }
    if (message.either?.$case === 'stringValue') {
      writer.uint32(18).string(message.either.stringValue);
    }
    if (message.either?.$case === 'stringListValue') {
      StringListExercisePropertyValue.encode(message.either.stringListValue, writer.uint32(26).fork()).ldelim();
    }
    if (message.either?.$case === 'intValue') {
      writer.uint32(32).int32(message.either.intValue);
    }
    if (message.either?.$case === 'intPairValue') {
      IntPairExercisePropertyValue.encode(message.either.intPairValue, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): ExercisePropertyValueUnion {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExercisePropertyValueUnion } as ExercisePropertyValueUnion;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.either = {$case: 'boolValue', boolValue: reader.bool()};
          break;
        case 2:
          message.either = {$case: 'stringValue', stringValue: reader.string()};
          break;
        case 3:
          message.either = {$case: 'stringListValue', stringListValue: StringListExercisePropertyValue.decode(reader, reader.uint32())};
          break;
        case 4:
          message.either = {$case: 'intValue', intValue: reader.int32()};
          break;
        case 5:
          message.either = {$case: 'intPairValue', intPairValue: IntPairExercisePropertyValue.decode(reader, reader.uint32())};
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ExercisePropertyValueUnion {
    const message = { ...baseExercisePropertyValueUnion } as ExercisePropertyValueUnion;
    if (object.boolValue !== undefined && object.boolValue !== null) {
      message.either = {$case: 'boolValue', boolValue: Boolean(object.boolValue)};
    }
    if (object.stringValue !== undefined && object.stringValue !== null) {
      message.either = {$case: 'stringValue', stringValue: String(object.stringValue)};
    }
    if (object.stringListValue !== undefined && object.stringListValue !== null) {
      message.either = {$case: 'stringListValue', stringListValue: StringListExercisePropertyValue.fromJSON(object.stringListValue)};
    }
    if (object.intValue !== undefined && object.intValue !== null) {
      message.either = {$case: 'intValue', intValue: Number(object.intValue)};
    }
    if (object.intPairValue !== undefined && object.intPairValue !== null) {
      message.either = {$case: 'intPairValue', intPairValue: IntPairExercisePropertyValue.fromJSON(object.intPairValue)};
    }
    return message;
  },
  fromPartial(object: DeepPartial<ExercisePropertyValueUnion>): ExercisePropertyValueUnion {
    const message = { ...baseExercisePropertyValueUnion } as ExercisePropertyValueUnion;
    if (object.either?.$case === 'boolValue' && object.either?.boolValue !== undefined && object.either?.boolValue !== null) {
      message.either = {$case: 'boolValue', boolValue: object.either.boolValue};
    }
    if (object.either?.$case === 'stringValue' && object.either?.stringValue !== undefined && object.either?.stringValue !== null) {
      message.either = {$case: 'stringValue', stringValue: object.either.stringValue};
    }
    if (object.either?.$case === 'stringListValue' && object.either?.stringListValue !== undefined && object.either?.stringListValue !== null) {
      message.either = {$case: 'stringListValue', stringListValue: StringListExercisePropertyValue.fromPartial(object.either.stringListValue)};
    }
    if (object.either?.$case === 'intValue' && object.either?.intValue !== undefined && object.either?.intValue !== null) {
      message.either = {$case: 'intValue', intValue: object.either.intValue};
    }
    if (object.either?.$case === 'intPairValue' && object.either?.intPairValue !== undefined && object.either?.intPairValue !== null) {
      message.either = {$case: 'intPairValue', intPairValue: IntPairExercisePropertyValue.fromPartial(object.either.intPairValue)};
    }
    return message;
  },
  toJSON(message: ExercisePropertyValueUnion): unknown {
    const obj: any = {};
    message.either?.$case === 'boolValue' && (obj.boolValue = message.either?.boolValue);
    message.either?.$case === 'stringValue' && (obj.stringValue = message.either?.stringValue);
    message.either?.$case === 'stringListValue' && (obj.stringListValue = message.either?.stringListValue ? StringListExercisePropertyValue.toJSON(message.either?.stringListValue) : undefined);
    message.either?.$case === 'intValue' && (obj.intValue = message.either?.intValue);
    message.either?.$case === 'intPairValue' && (obj.intPairValue = message.either?.intPairValue ? IntPairExercisePropertyValue.toJSON(message.either?.intPairValue) : undefined);
    return obj;
  },
};

export const StringListExercisePropertyValue = {
  encode(message: StringListExercisePropertyValue, writer: Writer = Writer.create()): Writer {
    for (const v of message.values) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): StringListExercisePropertyValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStringListExercisePropertyValue } as StringListExercisePropertyValue;
    message.values = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.values.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StringListExercisePropertyValue {
    const message = { ...baseStringListExercisePropertyValue } as StringListExercisePropertyValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(String(e));
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<StringListExercisePropertyValue>): StringListExercisePropertyValue {
    const message = { ...baseStringListExercisePropertyValue } as StringListExercisePropertyValue;
    message.values = [];
    if (object.values !== undefined && object.values !== null) {
      for (const e of object.values) {
        message.values.push(e);
      }
    }
    return message;
  },
  toJSON(message: StringListExercisePropertyValue): unknown {
    const obj: any = {};
    if (message.values) {
      obj.values = message.values.map(e => e);
    } else {
      obj.values = [];
    }
    return obj;
  },
};

export const IntPairExercisePropertyValue = {
  encode(message: IntPairExercisePropertyValue, writer: Writer = Writer.create()): Writer {
    writer.uint32(8).int32(message.loverValue);
    writer.uint32(16).int32(message.higherValue);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): IntPairExercisePropertyValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseIntPairExercisePropertyValue } as IntPairExercisePropertyValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.loverValue = reader.int32();
          break;
        case 2:
          message.higherValue = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): IntPairExercisePropertyValue {
    const message = { ...baseIntPairExercisePropertyValue } as IntPairExercisePropertyValue;
    if (object.loverValue !== undefined && object.loverValue !== null) {
      message.loverValue = Number(object.loverValue);
    }
    if (object.higherValue !== undefined && object.higherValue !== null) {
      message.higherValue = Number(object.higherValue);
    }
    return message;
  },
  fromPartial(object: DeepPartial<IntPairExercisePropertyValue>): IntPairExercisePropertyValue {
    const message = { ...baseIntPairExercisePropertyValue } as IntPairExercisePropertyValue;
    if (object.loverValue !== undefined && object.loverValue !== null) {
      message.loverValue = object.loverValue;
    }
    if (object.higherValue !== undefined && object.higherValue !== null) {
      message.higherValue = object.higherValue;
    }
    return message;
  },
  toJSON(message: IntPairExercisePropertyValue): unknown {
    const obj: any = {};
    message.loverValue !== undefined && (obj.loverValue = message.loverValue);
    message.higherValue !== undefined && (obj.higherValue = message.higherValue);
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