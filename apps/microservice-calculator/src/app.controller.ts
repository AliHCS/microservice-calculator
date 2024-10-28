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

  @Post('prime')
  async checkPrime(
    @Body() data: { number: number },
  ): Promise<{ isPrime: boolean }> {
    const result = await this.appService.checkPrime(data.number);
    return result; // Devolvemos el objeto tal como lo recibimos
  }

  @Post('factorial')
  async checkFactorial(
    @Body() data: { number: number },
  ): Promise<{ factorial: number }> {
    const factorial = await this.appService.calculateFactorial(data.number);
    return { factorial }; // Devolvemos el objeto tal como lo recibimos
  }

  @Post('calculate')
  async calculate(
    @Body() data: { number: number },
  ): Promise<{ isPair: boolean; isPrime: boolean; factorial: number }> {
    const { number } = data;

    const [parityResult, primeResult, factorial] = await Promise.all([
      this.appService.checkParity(number),
      this.appService.checkPrime(number),
      this.appService.calculateFactorial(number),
    ]);

    return {
      ...parityResult,
      ...primeResult,
      factorial,
    };
  }
}
