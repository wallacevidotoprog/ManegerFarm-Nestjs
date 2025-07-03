import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { EmployeeEntity } from './entities/employee.entity';
import { AuthModule } from 'src/auth/auth.module';
import { AuthGuard } from 'src/auth/Guards/auth.guard';
import { AppConfigModule } from 'src/common/config/app-config.module';
import { GuardModule } from 'src/auth/Guards/guard.module';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService],
  imports: [TypeOrmModule.forFeature([EmployeeEntity]),GuardModule],
})
export class EmployeeModule {}
