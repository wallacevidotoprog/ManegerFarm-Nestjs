import { Module } from '@nestjs/common';
import { PropertyActivitiesService, PropertyService } from './property.service';
import { PropertyActivitiesController, PropertyController } from './property.controller';

@Module({
  controllers: [PropertyController, PropertyActivitiesController],
  providers: [PropertyService, PropertyActivitiesService],
})
export class PropertyModule {}
