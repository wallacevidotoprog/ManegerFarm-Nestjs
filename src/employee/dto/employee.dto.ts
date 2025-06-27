import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsEmail, IsEnum, IsNumber, IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';
import { CreateAddressDto } from 'src/address/dto/address.dto';
import { CategoryCnh, Sex } from 'src/Domain/Models/Emun/db.enum';
import { CreatePropertyDto } from 'src/property/dto/property.dto';
import { CreateUserDto } from 'src/user/dto/user.dto';
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
  @Type(() => CreateAddressDto)
  address?: CreateAddressDto;

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
  @Type(() => CreatePropertyDto)
  property?: CreatePropertyDto;

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
  @Type(() => CreateUserDto)
  user?: CreateUserDto;
}
export class UpdateEmployeeDto extends PartialType(CreateEmployeeDto) {}
