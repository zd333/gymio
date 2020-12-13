import { Injectable } from '@nestjs/common';
import { ExerciseDetailsDto } from '../dto';

@Injectable()
export class ExerciseClientService {
  getExercise(params: { readonly name: string }): ExerciseDetailsDto {
    // TODO: implement
    const  { name } = params;

    return null as any;
  }
}
