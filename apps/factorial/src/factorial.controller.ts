import { Controller, Logger } from '@nestjs/common';
import { FactorialService } from './factorial.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class FactorialController {
  private readonly logger = new Logger(FactorialController.name);

  constructor(private readonly factorialService: FactorialService) {}

  @MessagePattern('factorial_check')
  checkParity(number: number): number {
    this.logger.log(`Received number: ${number}`);
    const factorial = this.factorialService.calculateFactorial(number);
    this.logger.log(`Result: ${factorial}`);
    return factorial;
  }
}
