import { Module } from '@nestjs/common';
import { FactorialController } from './factorial.controller';
import { FactorialService } from './factorial.service';

@Module({
  imports: [],
  controllers: [FactorialController],
  providers: [FactorialService],
})
export class FactorialModule {}
