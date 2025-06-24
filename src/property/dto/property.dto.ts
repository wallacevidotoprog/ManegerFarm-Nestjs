import { PartialType } from '@nestjs/mapped-types';
import { PropertyStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDecimal,
  IsEnum,
  IsJSON,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { AddressEntity } from 'src/address/entities/address.entity';
import { MapPoint } from 'src/Domain/Models/map-points';
import { UserEntity } from 'src/user/entities/user.entity';

export class CreatePropertyDto {
  @IsString()
  @IsNotEmpty()
  cnpj: string;

  @IsString()
  @IsNotEmpty()
  company: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUUID()
  addressId: string;

  @ValidateNested()
  @Type(() => AddressEntity)
  address: AddressEntity;

  @IsNumber({ maxDecimalPlaces: 2 })
  size: number;

  @IsJSON()
  mapPoints: MapPoint[];

  @IsOptional()
  @IsUUID()
  ownerId?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => UserEntity)
  owner?: UserEntity;

  @IsEnum(PropertyStatus)
  @IsOptional()
  status: PropertyStatus = PropertyStatus.NONE;

  @IsBoolean()
  active: boolean = true;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;
}
export class UpdatePropertyDto extends PartialType(CreatePropertyDto) {}
