import { PropertyStatus, User } from '@prisma/client';
import { AddressEntity } from 'src/address/entities/address.entity';
import { EntityDefault } from 'src/Domain/Models/entity-default';
import { MapPoint } from 'src/Domain/Models/map-points';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';
import { PropertyActivitiesEntity } from './property-activities.entity';

export class PropertyEntity extends EntityDefault {
  cnpj: string;
  company: string;
  name: string;
  addressId: string;
  address: AddressEntity;
  size: number;
  mapPoints: MapPoint[];
  ownerId?: string;
  owner?: User;
  status: PropertyStatus = PropertyStatus.NONE;
  active: boolean = true;
  description?: string;
  propertyActivities: PropertyActivitiesEntity[];
  employees: EmployeeEntity[];
}
