import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfigEnv } from './app-config.env';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [AppConfigEnv],
  exports: [AppConfigEnv],
})
export class AppConfigModule {}
