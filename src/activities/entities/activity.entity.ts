import { EntityDefault } from 'src/Domain/Models/entity-default';
import { PropertyActivitiesEntity } from 'src/property/entities/property-activities.entity';

export class Activity extends EntityDefault {
  name: string;
  description?: string;
  propertyActivities?: PropertyActivitiesEntity[];
}
