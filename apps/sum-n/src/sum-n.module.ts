import { Module } from '@nestjs/common';
import { SumNController } from './sum-n.controller';
import { SumNService } from './sum-n.service';

@Module({
  controllers: [SumNController],
  providers: [SumNService],
})
export class SumNModule {}
