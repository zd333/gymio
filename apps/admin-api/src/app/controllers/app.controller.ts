import { Controller, Get, Param } from '@nestjs/common';
import { ExerciseClientService } from '../services';

@Controller()
export class AppController {
  constructor(private readonly exerciseClientService: ExerciseClientService) {}

  @Get('exercise/:name')
  getExercise(@Param('name') name: string) {
    return this.exerciseClientService.getExercise({ name });
  }
}
