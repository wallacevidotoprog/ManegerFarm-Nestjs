import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/Domain/Repository/service-default.repository';
import { PrismaService } from 'src/Prisma/prisma.service';
import { DepartamentFunctionsEntity } from './entities/department-functions.entity';
import { DepartamentEntity } from './entities/department.entity';
import { FunctionsEntity } from './entities/functions .entity';

@Injectable()
export class DepartamentService extends BaseService<DepartamentEntity, typeof PrismaService.prototype.department> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.department);
  }
}

@Injectable()
export class FunctionsService extends BaseService<FunctionsEntity, typeof PrismaService.prototype.functions> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.functions);
  }
}

@Injectable()
export class DepartamentFunctionsService extends BaseService<DepartamentFunctionsEntity, typeof PrismaService.prototype.departmentFunctions> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.departmentFunctions);
  }
}
