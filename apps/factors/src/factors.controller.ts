import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { FactorsService } from './factors.service';

@Controller()
export class FactorsController {
  private readonly logger = new Logger(FactorsController.name);

  constructor(private readonly factorsService: FactorsService) {}

  @MessagePattern('factors_calculate')
  calculateFactors(n: number): number[] {
    this.logger.log(`Received number: ${n}`);
    const result = this.factorsService.calculateFactors(n);
    this.logger.log(`Factors: ${result}`);
    return result;
  }
}
