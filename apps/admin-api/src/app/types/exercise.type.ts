import { PropertyValue } from "../types";

export interface Exercise {
  readonly name: string;
  readonly propertyValues: Array<PropertyValue>;
}
