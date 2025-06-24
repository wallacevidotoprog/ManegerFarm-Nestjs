import { Departaments } from '@prisma/client';
import { EntityDefault } from 'src/Domain/Models/entity-default';
import { FunctionsEntity } from './functions .entity';
import { DepartamentFunctionsEntity } from './department-functions.entity';

export class DepartamentEntity extends EntityDefault {
  name: string;
  functions: Departaments = Departaments.NONE;
  description?: string;

  functionsList: FunctionsEntity[];
  departmentFunctions: DepartamentFunctionsEntity[];
}
