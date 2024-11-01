import { Module } from '@nestjs/common';
import { FactorsController } from './factors.controller';
import { FactorsService } from './factors.service';

@Module({
  imports: [],
  controllers: [FactorsController],
  providers: [FactorsService],
})
export class FactorsModule {}
