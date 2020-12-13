import { Exercise, PropertyValue } from '../types';

// TODO: move to dedicated package?
export class ExerciseDetailsDto implements Exercise {
  public readonly name: string;
  public readonly propertyValues: Array<PropertyValue>;

  constructor(exercise: Exercise) {
    this.name = exercise.name;
    this.propertyValues = exercise.propertyValues;
  }
}
