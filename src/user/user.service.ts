import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/Domain/Repository/service-default.repository';
import { PrismaService } from 'src/Prisma/prisma.service';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService extends BaseService<UserEntity, typeof PrismaService.prototype.user> {
  constructor(private readonly service: PrismaService) {
    super(service.user);
  }
}
