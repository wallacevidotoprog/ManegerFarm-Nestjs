import { Module } from '@nestjs/common';
import { PrismaModule } from './Prisma/prisma.module';
import { ActivitiesModule } from './activities/activities.module';
import { AddressModule } from './address/address.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import { HistoricModificationModule } from './historic-modification/historic-modification.module';
import { PropertyModule } from './property/property.module';
import { UserModule } from './user/user.module';
import { DepartamentModule } from './departament/departament.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, 
    UserModule, 
    PropertyModule, 
    ActivitiesModule, 
    AddressModule, 
    EmployeeModule, 
    DepartamentModule,
    HistoricModificationModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
