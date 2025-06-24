import { Activities, User } from '@prisma/client';
import { EntityDefault } from 'src/Domain/Models/entity-default';
import { PropertyEntity } from './property.entity';

export class PropertyActivitiesEntity extends EntityDefault {
  propertyId: string;
  property: PropertyEntity;
  activitiesId: string;
  activities: Activities;
  userId: string;
  user: User;
}
