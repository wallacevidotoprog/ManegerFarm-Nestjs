import { EntityDefault } from 'src/Domain/Models/entity-default';
import { DepartamentEntity } from './department.entity';
import { DepartamentFunctionsEntity } from './department-functions.entity';

export class FunctionsEntity extends EntityDefault {
  name: string;
  description?: string;
  departmentId: string;
  department: DepartamentEntity;

  departmentFunctions: DepartamentFunctionsEntity[];
}
