import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { SumNService } from './sum-n.service';

@Controller()
export class SumNController {
  private readonly logger = new Logger(SumNController.name);

  constructor(private readonly sumNService: SumNService) {}

  @MessagePattern('sumN_calculate')
  calculateSum(n: number): number {
    this.logger.log(`Received number: ${n}`);
    const sum = this.sumNService.calculateSum(n);
    this.logger.log(`Result: ${sum}`);
    return sum;
  }
}
