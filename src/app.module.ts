import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { EventEmitterModule } from '@nestjs/event-emitter';
=======
import { TypeOrmModule } from '@nestjs/typeorm';
>>>>>>> 55463c9267fb1fcf49b882427f7dc2bc1e2299dc
import { ActivitiesModule } from './activities/activities.module';
import { AddressModule } from './address/address.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
<<<<<<< HEAD
=======
import { AppConfigEnv } from './common/config/app-config.env';
>>>>>>> 55463c9267fb1fcf49b882427f7dc2bc1e2299dc
import { AppConfigModule } from './common/config/app-config.module';
import { DepartamentModule } from './departament/departament.module';
import { EmployeeModule } from './employee/employee.module';
import { HistoricModificationModule } from './historic-modification/historic-modification.module';
import { PropertyModule } from './property/property.module';
import { MailService } from './service/mail-service/mail-service.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AppConfigModule,
<<<<<<< HEAD
=======
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [AppConfigEnv],
      useFactory: (config: AppConfigEnv) => ({
        type: 'mysql',
        host: config.DB_HOST,
        port: config.DB_PORT,
        username: config.DB_USERNAME,
        password: config.DB_PASSWORD,
        database: config.DB_DATABASE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: true,
      }),
    }),
>>>>>>> 55463c9267fb1fcf49b882427f7dc2bc1e2299dc
    UserModule,
    PropertyModule,
    ActivitiesModule,
    AddressModule,
    EmployeeModule,
    DepartamentModule,
    HistoricModificationModule,
    AuthModule,
<<<<<<< HEAD
    EventEmitterModule.forRoot(),
=======
>>>>>>> 55463c9267fb1fcf49b882427f7dc2bc1e2299dc
  ],
  controllers: [AppController],
  providers: [AppService, MailService],
})
export class AppModule {}
