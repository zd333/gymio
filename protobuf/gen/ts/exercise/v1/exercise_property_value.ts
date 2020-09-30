/* eslint-disable */
import { ExerciseProperty } from '../../exercise/v1/exercise_property';
import { Writer, Reader } from 'protobufjs/minimal';


export interface ExercisePropertyValue {
  property: ExerciseProperty | undefined;
  value: ExercisePropertyValueUnion | undefined;
}

export interface ExercisePropertyValueUnion {
  either?: { $case: 'boolValue', boolValue: boolean } | { $case: 'stringValue', stringValue: string } | { $case: 'intValue', intValue: number } | { $case: 'intPairValue', intPairValue: IntPairExercisePropertyValue } | { $case: 'mapValue', mapValue: MapExercisePropertyValue };
}

export interface IntPairExercisePropertyValue {
  loverValue: number;
  higherValue: number;
}

export interface MapExercisePropertyValue {
  map: { [key: string]: ExercisePropertyValueUnion };
}

export interface MapExercisePropertyValue_MapEntry {
  key: string;
  value: ExercisePropertyValueUnion | undefined;
}

const baseExercisePropertyValue: object = {
};

const baseExercisePropertyValueUnion: object = {
};

const baseIntPairExercisePropertyValue: object = {
  loverValue: 0,
  higherValue: 0,
};

const baseMapExercisePropertyValue: object = {
};

const baseMapExercisePropertyValue_MapEntry: object = {
  key: "",
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
    if (message.either?.$case === 'intValue') {
      writer.uint32(24).int32(message.either.intValue);
    }
    if (message.either?.$case === 'intPairValue') {
      IntPairExercisePropertyValue.encode(message.either.intPairValue, writer.uint32(34).fork()).ldelim();
    }
    if (message.either?.$case === 'mapValue') {
      MapExercisePropertyValue.encode(message.either.mapValue, writer.uint32(42).fork()).ldelim();
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
          message.either = {$case: 'intValue', intValue: reader.int32()};
          break;
        case 4:
          message.either = {$case: 'intPairValue', intPairValue: IntPairExercisePropertyValue.decode(reader, reader.uint32())};
          break;
        case 5:
          message.either = {$case: 'mapValue', mapValue: MapExercisePropertyValue.decode(reader, reader.uint32())};
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
    if (object.intValue !== undefined && object.intValue !== null) {
      message.either = {$case: 'intValue', intValue: Number(object.intValue)};
    }
    if (object.intPairValue !== undefined && object.intPairValue !== null) {
      message.either = {$case: 'intPairValue', intPairValue: IntPairExercisePropertyValue.fromJSON(object.intPairValue)};
    }
    if (object.mapValue !== undefined && object.mapValue !== null) {
      message.either = {$case: 'mapValue', mapValue: MapExercisePropertyValue.fromJSON(object.mapValue)};
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
    if (object.either?.$case === 'intValue' && object.either?.intValue !== undefined && object.either?.intValue !== null) {
      message.either = {$case: 'intValue', intValue: object.either.intValue};
    }
    if (object.either?.$case === 'intPairValue' && object.either?.intPairValue !== undefined && object.either?.intPairValue !== null) {
      message.either = {$case: 'intPairValue', intPairValue: IntPairExercisePropertyValue.fromPartial(object.either.intPairValue)};
    }
    if (object.either?.$case === 'mapValue' && object.either?.mapValue !== undefined && object.either?.mapValue !== null) {
      message.either = {$case: 'mapValue', mapValue: MapExercisePropertyValue.fromPartial(object.either.mapValue)};
    }
    return message;
  },
  toJSON(message: ExercisePropertyValueUnion): unknown {
    const obj: any = {};
    message.either?.$case === 'boolValue' && (obj.boolValue = message.either?.boolValue);
    message.either?.$case === 'stringValue' && (obj.stringValue = message.either?.stringValue);
    message.either?.$case === 'intValue' && (obj.intValue = message.either?.intValue);
    message.either?.$case === 'intPairValue' && (obj.intPairValue = message.either?.intPairValue ? IntPairExercisePropertyValue.toJSON(message.either?.intPairValue) : undefined);
    message.either?.$case === 'mapValue' && (obj.mapValue = message.either?.mapValue ? MapExercisePropertyValue.toJSON(message.either?.mapValue) : undefined);
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

export const MapExercisePropertyValue = {
  encode(message: MapExercisePropertyValue, writer: Writer = Writer.create()): Writer {
    Object.entries(message.map).forEach(([key, value]) => {
      MapExercisePropertyValue_MapEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).ldelim();
    })
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MapExercisePropertyValue {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMapExercisePropertyValue } as MapExercisePropertyValue;
    message.map = {};
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          const entry1 = MapExercisePropertyValue_MapEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.map[entry1.key] = entry1.value;
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MapExercisePropertyValue {
    const message = { ...baseMapExercisePropertyValue } as MapExercisePropertyValue;
    message.map = {};
    if (object.map !== undefined && object.map !== null) {
      Object.entries(object.map).forEach(([key, value]) => {
        message.map[key] = ExercisePropertyValueUnion.fromJSON(value);
      })
    }
    return message;
  },
  fromPartial(object: DeepPartial<MapExercisePropertyValue>): MapExercisePropertyValue {
    const message = { ...baseMapExercisePropertyValue } as MapExercisePropertyValue;
    message.map = {};
    if (object.map !== undefined && object.map !== null) {
      Object.entries(object.map).forEach(([key, value]) => {
        if (value !== undefined) {
          message.map[key] = ExercisePropertyValueUnion.fromPartial(value);
        }
      })
    }
    return message;
  },
  toJSON(message: MapExercisePropertyValue): unknown {
    const obj: any = {};
    obj.map = {};
    if (message.map) {
      Object.entries(message.map).forEach(([k, v]) => {
        obj.map[k] = ExercisePropertyValueUnion.toJSON(v);
      })
    }
    return obj;
  },
};

export const MapExercisePropertyValue_MapEntry = {
  encode(message: MapExercisePropertyValue_MapEntry, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.key);
    if (message.value !== undefined && message.value !== undefined) {
      ExercisePropertyValueUnion.encode(message.value, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MapExercisePropertyValue_MapEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMapExercisePropertyValue_MapEntry } as MapExercisePropertyValue_MapEntry;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string();
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
  fromJSON(object: any): MapExercisePropertyValue_MapEntry {
    const message = { ...baseMapExercisePropertyValue_MapEntry } as MapExercisePropertyValue_MapEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ExercisePropertyValueUnion.fromJSON(object.value);
    }
    return message;
  },
  fromPartial(object: DeepPartial<MapExercisePropertyValue_MapEntry>): MapExercisePropertyValue_MapEntry {
    const message = { ...baseMapExercisePropertyValue_MapEntry } as MapExercisePropertyValue_MapEntry;
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = ExercisePropertyValueUnion.fromPartial(object.value);
    }
    return message;
  },
  toJSON(message: MapExercisePropertyValue_MapEntry): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined && (obj.value = message.value ? ExercisePropertyValueUnion.toJSON(message.value) : undefined);
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