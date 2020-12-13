import { Property } from './property.type';

export type PropertyValue =
  | StringPropertyValue
  | NumberPropertyValue
  | BoolPropertyValue
  | StringListPropertyValue
  | IntPairPropertyValue;

interface StringPropertyValue {
  readonly property: {
    readonly name: Property['name'];
    readonly type: 'string';
  };
  readonly value: string;
}

interface NumberPropertyValue {
  readonly property: {
    readonly name: Property['name'];
    readonly type: 'number';
  };
  readonly value: number;
}

interface BoolPropertyValue {
  readonly property: {
    readonly name: Property['name'];
    readonly type: 'bool';
  };
  readonly value: boolean;
}

interface StringListPropertyValue {
  readonly property: {
    readonly name: Property['name'];
    readonly type: 'stringList';
  };
  readonly value: Array<string>;
}

interface IntPairPropertyValue {
  readonly property: {
    readonly name: Property['name'];
    readonly type: 'numberPair';
  };
  readonly value: {
    readonly lower: number;
    readonly higher: number;
  };
}
