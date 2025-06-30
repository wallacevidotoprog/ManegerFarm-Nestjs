
import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityEntity } from 'src/activities/entities/activity.entity';
import { AddressEntity } from 'src/address/entities/address.entity';
import { DepartamentFunctionsEntity } from 'src/departament/entities/department-functions.entity';
import { DepartamentEntity } from 'src/departament/entities/department.entity';
import { FunctionsEntity } from 'src/departament/entities/functions .entity';
import { EmployeeEntity } from 'src/employee/entities/employee.entity';
import { HistoricModificationEntity } from 'src/historic-modification/entities/historic-modification.entity';
import { PropertyActivitiesEntity } from 'src/property/entities/property-activities.entity';
import { PropertyEntity } from 'src/property/entities/property.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { AppConfigEnv } from './app-config.env';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [AppConfigEnv],
      useFactory: (config: AppConfigEnv) => {
        return {
          type: 'mysql',
          host: config.DB_HOST,
          port: config.DB_PORT,
          username: config.DB_USERNAME,
          password: config.DB_PASSWORD,
          database: config.DB_DATABASE,
          entities: [
            UserEntity,
            AddressEntity,
            EmployeeEntity,
            ActivityEntity,
            DepartamentEntity,
            DepartamentFunctionsEntity,
            FunctionsEntity,
            PropertyEntity,
            PropertyActivitiesEntity,
            HistoricModificationEntity,
          ],
          // synchronize: true,
          // logging: true,
        };
      },
    }),
    MailerModule.forRootAsync({
      imports: [AppConfigModule],
      inject: [AppConfigEnv],
      useFactory: (config: AppConfigEnv) => {
        return {
          transport: {
            host: config.HOST_EMAIL, // ex: smtp.gmail.com
            port: config.PORT_EMAIL, // ou 465 para SSL
            secure: config.SECURE_EMAIL, // true para SSL (465), false para TLS (587)
            auth: {
              user: config.AUTH_USER_EMAIL,
              pass: config.AUTH_PASS_EMAIL,
            },
          },
          defaults: {
            from: `"Manager Farm" <${config.HOST_EMAIL}>`,
          },
        };
      },
    }),
  ], 

  providers: [AppConfigEnv],
  exports: [AppConfigEnv],
})
export class AppConfigModule {}
