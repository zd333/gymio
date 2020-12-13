import { Injectable } from '@nestjs/common';
import { AppConfig } from '../types';

@Injectable()
export class ConfigService {
  public getConfig(): AppConfig {
    // TODO: extract from env
    return {
      grpcServer: 'localhost:9042'
    };
  }
}
