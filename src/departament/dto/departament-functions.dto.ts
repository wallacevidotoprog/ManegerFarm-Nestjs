import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsUUID, ValidateNested } from 'class-validator';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';
import { DepartamentEntity } from '../entities/department.entity';
import { FunctionsEntity } from '../entities/functions .entity';

export class CreateDepartmentFunctionsDto {
  @IsUUID()
  employeeId: string;

  @ValidateNested()
  @Type(() => EmployeeEntity)
  employee: EmployeeEntity;

  @IsUUID()
  departmentId: string;

  @ValidateNested()
  @Type(() => DepartamentEntity)
  department: DepartamentEntity;

  @IsUUID()
  functionsId: string;

  @ValidateNested()
  @Type(() => FunctionsEntity)
  functions: FunctionsEntity;
}
export class UpdateDepartmentFunctionsDto extends PartialType(CreateDepartmentFunctionsDto) {}
