import { Controller } from '@nestjs/common';
import { BaseController } from 'src/Domain/Repository/controller-default.repository';
import { CreatePropertyActivitiesDto, UpdatePropertyActivitiesDto } from './dto/property-activities.dto';
import { CreatePropertyDto, UpdatePropertyDto } from './dto/property.dto';
import { PropertyActivitiesService, PropertyService } from './property.service';

@Controller('property')
export class PropertyController extends BaseController<CreatePropertyDto, UpdatePropertyDto, any> {
  constructor(private readonly propertyService: PropertyService) {
    super(propertyService); 
  }
}
@Controller('property-activities')
export class PropertyActivitiesController extends BaseController<CreatePropertyActivitiesDto, UpdatePropertyActivitiesDto, any> {
  constructor(private readonly propertyActivitiesService: PropertyActivitiesService) {
    super(propertyActivitiesService);
  }
}
