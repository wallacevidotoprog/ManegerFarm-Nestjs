import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartamentController, DepartamentFunctionsController, FunctionsController } from './departament.controller';
import { DepartamentFunctionsService, DepartamentService, FunctionsService } from './departament.service';
import { DepartamentFunctionsEntity } from './entities/department-functions.entity';
import { DepartamentEntity } from './entities/department.entity';
import { FunctionsEntity } from './entities/functions .entity';

@Module({
  controllers: [DepartamentController, DepartamentFunctionsController, FunctionsController],
  providers: [DepartamentService, DepartamentFunctionsService, FunctionsService],
  imports: [TypeOrmModule.forFeature([DepartamentEntity, DepartamentFunctionsEntity, FunctionsEntity])],
})
export class DepartamentModule {}
