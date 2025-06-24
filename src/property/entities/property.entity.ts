import { PropertyStatus, User } from '@prisma/client';
import { EntityDefault } from 'src/Domain/Models/entity-default';
import { MapPoint } from 'src/Domain/Models/map-points';
import { PropertyActivitiesEntity } from './property-activities.entity';

export class PropertyEntity extends EntityDefault {
  name: string;
  location: string;
  size: number;
  mapPoints: MapPoint[];
  ownerId: string;
  owner: User;
  userId: string;
  user: User;
  status: PropertyStatus;
  description?: string;
  propertyActivities?: PropertyActivitiesEntity[];
}
