import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ParityService } from './parity.service';

@Controller()
export class ParityController {
  private readonly logger = new Logger(ParityController.name);

  constructor(private readonly parityService: ParityService) {}

  @MessagePattern('parity_check')
  checkParity(number: number): { isPair: boolean } {
    this.logger.log(`Received number: ${number}`);
    const isPair = this.parityService.isPair(number);
    this.logger.log(`Result: ${isPair}`);
    return { isPair };
  }
}
