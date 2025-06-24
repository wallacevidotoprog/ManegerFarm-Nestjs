import { EntityDefault } from 'src/Domain/Models/entity-default';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';
import { DepartamentEntity } from './department.entity';
import { FunctionsEntity } from './functions .entity';

export class DepartamentFunctionsEntity extends EntityDefault {
  employeeId: string;
  employee: EmployeeEntity;
  departmentId: string;
  department: DepartamentEntity;
  functionsId: string;
  functions: FunctionsEntity;
}
