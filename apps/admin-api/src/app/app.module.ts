import { Module } from '@nestjs/common';

import { AppController } from './controllers/app.controller';
import { ExerciseClientService } from './services/exercise-client.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ExerciseClientService],
})
export class AppModule {}
