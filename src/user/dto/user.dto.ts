import { PartialType } from '@nestjs/mapped-types';
import { Role } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, ValidateNested } from 'class-validator';
import { AddressEntity } from 'src/address/entities/address.entity';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsUUID()
  addressId: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => AddressEntity)
  address?: AddressEntity;

  @IsEnum(Role)
  role: Role = Role.NONE;

  @IsOptional()
  @IsUUID()
  employeeId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => EmployeeEntity)
  employee?: EmployeeEntity;

  @IsBoolean()
  active: boolean = true;
}
export class UpdateUserDto extends PartialType(CreateUserDto) {}
