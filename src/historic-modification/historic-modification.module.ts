import { Module } from '@nestjs/common';
import { HistoricModificationService } from './historic-modification.service';
import { HistoricModificationController } from './historic-modification.controller';

@Module({
  controllers: [HistoricModificationController],
  providers: [HistoricModificationService],
})
export class HistoricModificationModule {}
