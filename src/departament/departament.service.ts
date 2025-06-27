import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/Domain/Repository/service-default.repository';
import { Repository } from 'typeorm';
import { DepartamentFunctionsEntity } from './entities/department-functions.entity';
import { DepartamentEntity } from './entities/department.entity';
import { FunctionsEntity } from './entities/functions .entity';

@Injectable()
export class DepartamentService extends BaseService<DepartamentEntity> {
  constructor(
    @InjectRepository(DepartamentEntity)
    protected readonly repo: Repository<DepartamentEntity>,
  ) {
    super(repo);
  }
}

@Injectable()
export class FunctionsService extends BaseService<FunctionsEntity> {
  constructor(
    @InjectRepository(FunctionsEntity)
    protected readonly repo: Repository<FunctionsEntity>,
  ) {
    super(repo);
  }
}

@Injectable()
export class DepartamentFunctionsService extends BaseService<DepartamentFunctionsEntity> {
  constructor(
    @InjectRepository(DepartamentFunctionsEntity)
    protected readonly repo: Repository<DepartamentFunctionsEntity>,
  ) {
    super(repo);
  }
}
