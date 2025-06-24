import { PartialType } from '@nestjs/mapped-types';
import { CategoryCnh, Sex } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsEmail, IsEnum, IsNumber, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';
import { AddressEntity } from 'src/address/entities/address.entity';
import { PropertyEntity } from 'src/property/entities/property.entity';
import { UserEntity } from 'src/user/entities/user.entity';
export class CreateEmployeeDto {
  @IsString()
  name: string;

  @IsString()
  cpf: string;

  @IsOptional()
  @IsString()
  rg?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  cnh?: string;

  @IsOptional()
  @IsEnum(CategoryCnh)
  category_cnh?: CategoryCnh;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  maturity_cnh?: Date;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsDate()
  @Type(() => Date)
  birth: Date;

  @IsUUID()
  addressId: string;

  @IsOptional()
  @Type(() => AddressEntity)
  address?: AddressEntity;

  @IsDate()
  @Type(() => Date)
  admission: Date;

  @IsNumber({ maxDecimalPlaces: 2 })
  salary: number;

  @IsOptional()
  @IsString()
  @MaxLength(10)
  cbo?: string;

  @IsOptional()
  @IsString()
  @MaxLength(15)
  pis?: string;

  @IsOptional()
  @IsEnum(Sex)
  sex?: Sex;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  resignation?: Date;

  @IsOptional()
  @IsUUID()
  propertyId?: string;

  @IsOptional()
  @Type(() => PropertyEntity)
  property?: PropertyEntity;

  @IsBoolean()
  active: boolean = true;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  createAt?: Date;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  updateAt?: Date;

  @IsOptional()
  @Type(() => UserEntity)
  user?: UserEntity;
}
export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
