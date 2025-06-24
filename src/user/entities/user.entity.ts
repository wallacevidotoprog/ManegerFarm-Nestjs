import { Role } from '@prisma/client';
import { AddressEntity } from 'src/address/entities/address.entity';
import { EntityDefault } from 'src/Domain/Models/entity-default';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';
import { HistoricModificationEntity } from 'src/historic-modification/entities/historic-modification.entity';
import { PropertyActivitiesEntity } from 'src/property/entities/property-activities.entity';
import { PropertyEntity } from 'src/property/entities/property.entity';

export class UserEntity extends EntityDefault {
  name: string;
  cpf: string;
  email: string;
  password: string;
  phone?: string;
  addressId: string;
  address?: AddressEntity;
  role: Role = Role.NONE;
  employeeId?: string;
  employee?: EmployeeEntity;
  active: boolean = true;

  propertyOwner: PropertyEntity[];
  propertyActivities: PropertyActivitiesEntity[];
  historicModification: HistoricModificationEntity[];
}
