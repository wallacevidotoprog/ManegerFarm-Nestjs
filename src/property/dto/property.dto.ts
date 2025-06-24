import { PartialType } from '@nestjs/mapped-types';
import { PropertyStatus } from '@prisma/client';
import {
  IsDecimal,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { MapPoint } from 'src/Domain/Models/map-points';

export class CreatePropertyDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsDecimal()
  size: number;

  @IsNotEmpty()
  mapPoints: MapPoint[];

  @IsString()
  @IsNotEmpty()
  ownerId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsEnum(PropertyStatus)
  status: PropertyStatus;

  @IsString()
  @IsOptional()
  description?: string;
}
export class UpdatePropertyDto extends PartialType(CreatePropertyDto) {}
