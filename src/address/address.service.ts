import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/Domain/Repository/service-default.repository';
import { PrismaService } from 'src/Prisma/prisma.service';
import { AddressEntity } from './entities/address.entity';

@Injectable()
export class AddressService extends BaseService<AddressEntity, typeof PrismaService.prototype.address> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.address);
  }
}
