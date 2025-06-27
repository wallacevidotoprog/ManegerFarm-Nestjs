import { Module } from '@nestjs/common';
import { PropertyActivitiesService, PropertyService } from './property.service';
import { PropertyActivitiesController, PropertyController } from './property.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyEntity } from './entities/property.entity';
import { PropertyActivitiesEntity } from './entities/property-activities.entity';

@Module({
    imports: [
      TypeOrmModule.forFeature([PropertyEntity, PropertyActivitiesEntity]),
    ],
  controllers: [PropertyController, PropertyActivitiesController],
  providers: [PropertyService, PropertyActivitiesService],
})
export class PropertyModule {}
