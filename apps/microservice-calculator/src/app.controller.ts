import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('parity')
  async checkParity(
    @Body() data: { number: number },
  ): Promise<{ isPair: boolean }> {
    const result = await this.appService.checkParity(data.number);
    return result; // Devolvemos el objeto tal como lo recibimos
  }
}
