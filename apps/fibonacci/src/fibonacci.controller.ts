import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { FibonacciService } from './fibonacci.service';

@Controller()
export class FibonacciController {
  private readonly logger = new Logger(FibonacciController.name);

  constructor(private readonly fibonacciService: FibonacciService) {}

  @MessagePattern('fibonacci_calculate')
  calculateFibonacci(n: number): number {
    this.logger.log(`Received number: ${n}`);
    const result = this.fibonacciService.calculateFibonacci(n);
    this.logger.log(`Result: ${result}`);
    return result;
  }
}
