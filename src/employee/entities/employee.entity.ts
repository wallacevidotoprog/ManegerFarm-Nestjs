import { CreateAddressDto } from 'src/address/dto/address.dto';
import { AddressEntity } from 'src/address/entities/address.entity';
import { CreateDepartamentFunctionsDto } from 'src/departament/dto/departament-functions.dto';
import { DepartamentFunctionsEntity } from 'src/departament/entities/department-functions.entity';
import { CategoryCnh, Sex } from 'src/Domain/Models/Emun/db.enum';
import { EntityDefault } from 'src/Domain/Models/entity-default.entity';
import { CreatePropertyDto } from 'src/property/dto/property.dto';
import { PropertyEntity } from 'src/property/entities/property.entity';
import { CreateUserDto } from 'src/user/dto/user.dto';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity('employees')
export class EmployeeEntity extends EntityDefault {
  @Column({ length: 100 })
  name: string;

  @Column({ length: 14 })
  cpf: string;

  @Column({ length: 20, nullable: true })
  rg?: string;

  @Column({ length: 20, nullable: true })
  cnh?: string;

  @Column({
    type: 'enum',
    enum: CategoryCnh,
    nullable: true,
  })
  category_cnh?: CategoryCnh;

  @Column({ type: 'date', nullable: true })
  maturity_cnh?: Date;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 20, nullable: true })
  phone?: string;

  @Column({ type: 'date' })
  birth: Date;

  @Column()
  addressId: string;

  @ManyToOne(() => AddressEntity, { cascade: true,eager: true })
  @JoinColumn({ name: 'addressId' })
  address?: AddressEntity;

  @Column({ type: 'date' })
  admission: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  salary: number;

  @Column({ length: 10, nullable: true })
  cbo?: string;

  @Column({ length: 20, nullable: true })
  pis?: string;

  @Column({
    type: 'enum',
    enum: Sex,
    nullable: true,
  })
  sex?: Sex;

  @Column({ type: 'date', nullable: true })
  resignation?: Date;

  @Column({ nullable: true })
  propertyId?: string;

  @ManyToOne(() => PropertyEntity, { cascade: true,nullable: true, eager: true })
  @JoinColumn({ name: 'propertyId' })
  property?: PropertyEntity;

  @Column({ default: true })
  active: boolean;

  @OneToMany(() => DepartamentFunctionsEntity, (df) => df.employee)
  departmentFunctions: DepartamentFunctionsEntity[];

  @OneToOne(() => CreateUserDto, (user) => user.employee)
  user?: CreateUserDto;
}
// export class EmployeeEntity extends EntityDefault {
//   name: string;
//   cpf: string;
//   rg?: string;
//   cnh?: string;
//   category_cnh?: CategoryCnh;
//   maturity_cnh?: Date;
//   email: string;
//   phone?: string;
//   birth: Date;
//   addressId: string;
//   address?: AddressEntity;
//   admission: Date;
//   salary: number;
//   cbo?: string;
//   pis?: string;
//   sex?: Sex;
//   resignation?: Date;
//   propertyId?: string;
//   property?: PropertyEntity;
//   active: boolean = true;

//   departmentFunctions: DepartamentFunctionsEntity[];
//   user?: UserEntity;
// }
