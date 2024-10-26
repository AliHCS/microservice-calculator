import { Controller, Get } from '@nestjs/common';
import { PrimeService } from './prime.service';

@Controller()
export class PrimeController {
  constructor(private readonly primeService: PrimeService) {}

  @Get()
  getHello(): string {
    return this.primeService.getHello();
  }
}
