import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { PrismaModule } from './Prisma/prisma.module';
import { ActivitiesModule } from './activities/activities.module';

@Module({
  imports: [PrismaModule, PropertyModule, ActivitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
