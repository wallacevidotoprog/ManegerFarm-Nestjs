import { EntityDefault } from 'src/Domain/Models/entity-default.entity';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { DepartamentEntity } from './department.entity';
import { FunctionsEntity } from './functions .entity';

@Entity('departament_functions')
export class DepartamentFunctionsEntity extends EntityDefault {
  @Column()
  employeeId: string;

  @ManyToOne(() => EmployeeEntity, (employee) => employee.departmentFunctions)
  @JoinColumn({ name: 'employeeId' })
  employee: EmployeeEntity;

  // @Column()
  // departmentId: string;

  // @ManyToOne(() => DepartamentEntity, (department) => department.departamentFunctions)
  // @JoinColumn({ name: 'departmentId' })
  // departament: DepartamentEntity;

  @Column()
  functionsId: string;

  @ManyToOne(() => FunctionsEntity, (functions) => functions.departament)
  @JoinColumn({ name: 'functionsId' })
  functions: FunctionsEntity;
}
// export class DepartamentFunctionsEntity extends EntityDefault {
//   employeeId: string;
//   employee: EmployeeEntity;
//   departmentId: string;
//   department: DepartamentEntity;
//   functionsId: string;
//   functions: FunctionsEntity;
// }
