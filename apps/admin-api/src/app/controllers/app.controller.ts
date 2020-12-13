import { Controller, Get, Param } from '@nestjs/common';
import { ExerciseDetailsDto } from '../dto';
import { ExerciseClientService } from '../services';

@Controller()
export class AppController {
  constructor(private readonly exerciseClientService: ExerciseClientService) {}

  @Get('exercise/:name')
  async getExercise(@Param('name') name: string): Promise<ExerciseDetailsDto> {
    const exercise = await this.exerciseClientService.getExercise({ name });

    return new ExerciseDetailsDto(exercise);
  }
}
