import { Property } from "./property.type";

export type PropertyValue = StringPropertyValue | NumberPropertyValue;

interface StringPropertyValue {
  readonly property: {
    readonly name: Property['name'];
    readonly type: 'string';
  },
  readonly value: string;
}

interface NumberPropertyValue {
  readonly property: {
    readonly name: Property['name'];
    readonly type: 'number';
  },
  readonly value: number;
}

// TODO: add other values types
