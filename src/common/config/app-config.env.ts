import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigEnv {
  constructor(private readonly config: ConfigService) {}
  get DB_HOST(): string {
    return this.requireEnv(this.config.get<string>('DB_HOST'), 'DB_HOST');
  }
  get DB_PORT(): number {
    return this.requireEnv(this.config.get<number>('DB_PORT'), 'DB_PORT');
  }
  get DB_USERNAME(): string {
    return this.requireEnv(this.config.get<string>('DB_USERNAME'), 'DB_USERNAME');
  }
  get DB_PASSWORD(): string {
    return this.requireEnv(this.config.get<string>('DB_PASSWORD'), 'DB_PASSWORD');
  }
  get DB_DATABASE(): string {
    return this.requireEnv(this.config.get<string>('DB_DATABASE'), 'DB_DATABASE');
  }
  get JWT_SECRET(): string {
    return this.requireEnv(this.config.get<string>('JWT_SECRET'), 'JWT_SECRET');
  }

  private requireEnv<T>(value: T | undefined, key: string): T {
    if (value === undefined || value === null) throw new Error(`Variável de ambiente ${key} não definida`);
    return value;
  }
}
