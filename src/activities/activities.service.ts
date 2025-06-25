import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/Domain/Repository/service-default.repository';
import { PrismaService } from 'src/Prisma/prisma.service';
import { ActivityEntity } from './entities/activity.entity';

@Injectable()
export class ActivitiesService extends BaseService<ActivityEntity, typeof PrismaService.prototype.activities> {
  constructor(private readonly service: PrismaService) {
    super(service.activities);
  }
}
