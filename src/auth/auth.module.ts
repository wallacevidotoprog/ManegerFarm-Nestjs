import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from 'src/address/entities/address.entity';
import { AppConfigEnv } from 'src/common/config/app-config.env';
import { AppConfigModule } from 'src/common/config/app-config.module';
import { UserEntity } from 'src/user/entities/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    AppConfigModule,
    TypeOrmModule.forFeature([UserEntity, AddressEntity]),
    JwtModule.registerAsync({
      imports: [AppConfigModule],
      inject: [AppConfigEnv],
      useFactory: (config: AppConfigEnv) => ({
        secret: config.JWT_SECRET,
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [JwtModule],
})
export class AuthModule {}
