import { Module } from '@nestjs/common';
import { PrimeService } from './prime.service';
import { PrimeController } from './prime.controller';

@Module({
  providers: [PrimeService],
  controllers: [PrimeController], // Agregamos el controlador aquí
})
export class PrimeModule {}
