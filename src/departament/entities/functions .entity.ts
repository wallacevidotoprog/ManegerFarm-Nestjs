import { EntityDefault } from 'src/Domain/Models/entity-default.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { DepartamentFunctionsEntity } from './department-functions.entity';
import { DepartamentEntity } from './department.entity';

@Entity('functions')
export class FunctionsEntity extends EntityDefault {
  @Column({ length: 100 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column()
  departamentId: string;

  @ManyToOne(() => DepartamentEntity, (departament) => departament.functionsList)
  @JoinColumn({ name: 'departamentId' })
  departament: DepartamentEntity;

  @OneToMany(() => DepartamentFunctionsEntity, (df) => df.functions)
  departamentFunctions: DepartamentFunctionsEntity[];
}
// export class FunctionsEntity extends EntityDefault {
//   name: string;
//   description?: string;
//   departmentId: string;
//   department: DepartamentEntity;

//   departmentFunctions: DepartamentFunctionsEntity[];
// }
