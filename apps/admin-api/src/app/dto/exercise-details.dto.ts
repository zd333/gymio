import { PropertyValue } from "../types";

export interface ExerciseDetailsDto {
  readonly name: string;
  readonly propertyValues: Array<PropertyValue>;
}
