import { Injectable } from '@nestjs/common';
import { AppConfig } from '../types';

@Injectable()
export class ConfigService {
  private readonly config: AppConfig;

  constructor() {
    this.config = {
      exerciseApiGrpcServer: process.env.EXERCISE_API_GRPC_SERVER || '',
    };
  }

  public getConfig(): AppConfig {
    return this.config;
  }
}
