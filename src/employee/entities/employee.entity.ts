import { CategoryCnh, Sex } from '@prisma/client';
import { AddressEntity } from 'src/address/entities/address.entity';
import { DepartamentFunctionsEntity } from 'src/departament/entities/department-functions.entity';
import { EntityDefault } from 'src/Domain/Models/entity-default';
import { PropertyEntity } from 'src/property/entities/property.entity';
import { UserEntity } from 'src/user/entities/user.entity';

export class EmployeeEntity extends EntityDefault {
  name: string;
  cpf: string;
  rg?: string;
  cnh?: string;
  category_cnh?: CategoryCnh;
  maturity_cnh?: Date;
  email: string;
  phone?: string;
  birth: Date;
  addressId: string;
  address?: AddressEntity;
  admission: Date;
  salary: number;
  cbo?: string;
  pis?: string;
  sex?: Sex;
  resignation?: Date;
  propertyId?: string;
  property?: PropertyEntity;
  active: boolean = true;

  departmentFunctions: DepartamentFunctionsEntity[];
  user?: UserEntity;
}
