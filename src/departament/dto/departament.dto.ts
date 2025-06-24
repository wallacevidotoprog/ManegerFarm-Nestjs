import { PartialType } from '@nestjs/mapped-types';
import { Departaments } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
export class CreateDepartmentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(Departaments)
  functions: Departaments = Departaments.NONE;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;
}
export class UpdateDepartmentDto extends PartialType(CreateDepartmentDto) {}
