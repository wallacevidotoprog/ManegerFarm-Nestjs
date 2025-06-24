import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/Domain/Repository/service-default.repository';
import { EmployeeEntity } from './entities/employee.entity';
import { PrismaService } from 'src/Prisma/prisma.service';

@Injectable()
export class EmployeeService extends BaseService<EmployeeEntity, typeof PrismaService.prototype.employee> {

  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.employee);
  }
}
