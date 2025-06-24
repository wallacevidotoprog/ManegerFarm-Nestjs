import { Module } from '@nestjs/common';
import { DepartamentController, DepartamentFunctionsController, FunctionsController } from './departament.controller';
import { DepartamentFunctionsService, DepartamentService, FunctionsService } from './departament.service';

@Module({
  controllers: [DepartamentController, DepartamentFunctionsController, FunctionsController],
  providers: [DepartamentService, DepartamentFunctionsService, FunctionsService],
})
export class DepartamentModule {}
