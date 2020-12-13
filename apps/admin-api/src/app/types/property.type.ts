export interface Property {
  readonly name: string;
  readonly type: 'string' | 'number' | 'bool' | 'stringList' | 'intPair';
}
