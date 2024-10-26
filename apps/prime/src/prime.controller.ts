import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PrimeService } from './prime.service';

@Controller()
export class PrimeController {
  private readonly logger = new Logger(PrimeController.name);

  constructor(private readonly primeService: PrimeService) {}

  // Escucha los mensajes con el patrón 'prime_check'
  @MessagePattern('prime_check')
  isPrime(@Payload() number: number): boolean {
    this.logger.log(`Received number: ${number}`);
    const result = this.primeService.isPrime(number);
    this.logger.log(`Is Prime: ${result}`);
    return result;
  }
}
