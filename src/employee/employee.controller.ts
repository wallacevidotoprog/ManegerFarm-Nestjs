import { Controller } from '@nestjs/common';
import { BaseController } from 'src/Domain/Repository/controller-default.repository';
import { CreateEmployeeDto, UpdateEmployeeDto } from './dto/employee.dto';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController extends BaseController<CreateEmployeeDto, UpdateEmployeeDto, any> {
  constructor(private readonly employeeService: EmployeeService) {
    super(employeeService);
  }
}
