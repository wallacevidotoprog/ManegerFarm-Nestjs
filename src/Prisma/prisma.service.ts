import { Injectable, OnModuleInit } from '@nestjs/common';
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
        const utcDate = new Date(currentDate.getTime() - currentDate.getTimezoneOffset() * 60000);
        return utcDate.toISOString();
      };
      console.log('Prisma Middleware:', params);

      if (params.action === 'create') {
        params.args.data.createdAt = brasilTime(); 
        params.args.data.updatedAt = brasilTime(); 
      }

      if (params.action === 'update') {
        params.args.data.updatedAt = brasilTime();
      }

      return next(params);
    });
  }
  async onModuleInit() {
    await this.$connect();
  }
}
