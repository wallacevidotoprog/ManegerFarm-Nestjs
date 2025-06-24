import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/Domain/Repository/service-default.repository';
import { PrismaService } from 'src/Prisma/prisma.service';
import { PropertyEntity } from './entities/property.entity';
import { PropertyActivitiesEntity } from './entities/property-activities.entity';

@Injectable()
export class PropertyService extends BaseService<PropertyEntity, typeof PrismaService.prototype.property> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.property);
  }
}

@Injectable()
export class PropertyActivitiesService extends BaseService<PropertyActivitiesEntity, typeof PrismaService.prototype.propertyActivities> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.propertyActivities);
  }
}
