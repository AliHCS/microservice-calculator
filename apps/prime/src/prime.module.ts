import { Module } from '@nestjs/common';
import { PrimeController } from './prime.controller';
import { PrimeService } from './prime.service';

@Module({
  imports: [],
  controllers: [PrimeController],
  providers: [PrimeService],
})
export class PrimeModule {}
