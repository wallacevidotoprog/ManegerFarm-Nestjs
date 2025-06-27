import { AddressEntity } from 'src/address/entities/address.entity';
import { PropertyStatus } from 'src/Domain/Models/Emun/db.enum';
import { EntityDefault } from 'src/Domain/Models/entity-default.entity';
import { MapPoint } from 'src/Domain/Models/map-points';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { PropertyActivitiesEntity } from './property-activities.entity';

@Entity('properties')
export class PropertyEntity extends EntityDefault {
  @Column({ length: 18 }) // CNPJ tem 14 dígitos + formatação, ajustar conforme necessário
  cnpj: string;

  @Column({ length: 150 })
  company: string;

  @Column({ length: 150 })
  name: string;

  @Column()
  addressId: string;

  @ManyToOne(() => AddressEntity, { eager: true })
  @JoinColumn({ name: 'addressId' })
  address: AddressEntity;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  size: number;

  @Column({ type: 'json', nullable: true })
  mapPoints: MapPoint[];

  @Column({ nullable: true })
  ownerId?: string;

  @ManyToOne(() => UserEntity, { nullable: true })
  @JoinColumn({ name: 'ownerId' })
  owner?: UserEntity;

  @Column({
    type: 'enum',
    enum: PropertyStatus,
    default: PropertyStatus.NONE,
  })
  status: PropertyStatus;

  @Column({ default: true })
  active: boolean;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @OneToMany(() => PropertyActivitiesEntity, (pa) => pa.property)
  propertyActivities: PropertyActivitiesEntity[];

  @OneToMany(() => EmployeeEntity, (employee) => employee.property)
  employees: EmployeeEntity[];
}

// export class PropertyEntity extends EntityDefault {
//   cnpj: string;
//   company: string;
//   name: string;
//   addressId: string;
//   address: AddressEntity;
//   size: number;
//   mapPoints: MapPoint[];
//   ownerId?: string;
//   owner?: User;
//   status: PropertyStatus = PropertyStatus.NONE;
//   active: boolean = true;
//   description?: string;
//   propertyActivities: PropertyActivitiesEntity[];
//   employees: EmployeeEntity[];
// }
