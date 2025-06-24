import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString, Length, MaxLength } from 'class-validator';

export class CreateAddressDto {
  @IsOptional()
  @IsString()
  @MaxLength(45)
  cep?: string;

  @IsString()
  @MaxLength(100)
  place: string;

  @IsString()
  @MaxLength(45)
  number: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  complement?: string;

  @IsString()
  @MaxLength(80)
  neighborhood: string;

  @IsString()
  @MaxLength(50)
  city: string;

  @IsString()
  @Length(2, 2)
  uf: string;
}
export class UpdateAddressDto extends PartialType(CreateAddressDto) {}
