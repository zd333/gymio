import { Module } from '@nestjs/common';

import { AppController } from './controllers/app.controller';
import { ConfigService } from './services/config.service';
import { ExerciseClientService } from './services/exercise-client.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ConfigService, ExerciseClientService],
})
export class AppModule {}
