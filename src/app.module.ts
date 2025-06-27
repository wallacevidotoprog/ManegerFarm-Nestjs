import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivitiesModule } from './activities/activities.module';
import { AddressModule } from './address/address.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AppConfigEnv } from './common/config/app-config.env';
import { AppConfigModule } from './common/config/app-config.module';
import { DepartamentModule } from './departament/departament.module';
import { EmployeeModule } from './employee/employee.module';
import { HistoricModificationModule } from './historic-modification/historic-modification.module';
import { PropertyModule } from './property/property.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AppConfigModule,
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
    UserModule,
    PropertyModule,
    ActivitiesModule,
    AddressModule,
    EmployeeModule,
    DepartamentModule,
    HistoricModificationModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
