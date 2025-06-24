import { Controller } from '@nestjs/common';
import { BaseController } from 'src/Domain/Repository/controller-default.repository';
import { DepartamentFunctionsService, DepartamentService, FunctionsService } from './departament.service';
import { CreateDepartmentFunctionsDto, UpdateDepartmentFunctionsDto } from './dto/departament-functions.dto';
import { CreateDepartmentDto, UpdateDepartmentDto } from './dto/departament.dto';
import { CreateFunctionsDto, UpdateFunctionsDto } from './dto/functions .dto';

@Controller('department')
export class DepartamentController extends BaseController<CreateDepartmentDto, UpdateDepartmentDto, any> {
  constructor(private readonly departmentService: DepartamentService) {
    super(departmentService);
  }
}
@Controller('functions')
export class FunctionsController extends BaseController<CreateFunctionsDto, UpdateFunctionsDto, any> {
  constructor(private readonly functionsService: FunctionsService) {
    super(functionsService);
  }
}
@Controller('department-functions')
export class DepartamentFunctionsController extends BaseController<CreateDepartmentFunctionsDto, UpdateDepartmentFunctionsDto, any> {
  constructor(private readonly departmentFunctionsService: DepartamentFunctionsService) {
    super(departmentFunctionsService);
  }
}
