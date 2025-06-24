import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      // log: ['query', 'info', 'warn', 'error'],
      log: ['error'],
    });

    this.$use(async (params, next) => {
      const brasilTime = () => {
        const currentDate = new Date();
        const utcDate = new Date(
          currentDate.getTime() - currentDate.getTimezoneOffset() * 60000,
        );
        return utcDate.toISOString();
      };

      if (params.action === 'create') {
        params.args.data.createAt = brasilTime();
        params.args.data.updateAt = brasilTime();
      }

      if (params.action === 'update') {
        params.args.data.updateAt = brasilTime();
      }

      return next(params);
    });
  }
  async onModuleInit() {
    await this.$connect();
  }
}
