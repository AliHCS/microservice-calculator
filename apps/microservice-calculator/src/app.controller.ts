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

  @Post('sumN')
  async checkSumN(@Body() data: { number: number }): Promise<{ sumN: number }> {
    const sumN = await this.appService.calculateSumN(data.number);
    return { sumN }; // Devolvemos el resultado en un objeto
  }

  @Post('fibonacci')
  async checkFibonacci(
    @Body() data: { number: number },
  ): Promise<{ fibonacci: number }> {
    const fibonacci = await this.appService.calculateFibonacci(data.number);
    return { fibonacci }; // Devolvemos el resultado en un objeto
  }

  @Post('factors')
  async checkFactors(
    @Body() data: { number: number },
  ): Promise<{ factors: number[] }> {
    const factors = await this.appService.calculateFactors(data.number);
    return { factors }; // Devolvemos el resultado en un objeto
  }

  @Post('calculate')
  async calculate(@Body() data: { number: number }): Promise<{
    isPair: boolean;
    isPrime: boolean;
    factorial: number;
    sumN: number;
    fibonacci: number;
    factors: number[];
  }> {
    const { number } = data;

    const [parityResult, primeResult, factorial, sumN, fibonacci, factors] =
      await Promise.all([
        this.appService.checkParity(number),
        this.appService.checkPrime(number),
        this.appService.calculateFactorial(number),
        this.appService.calculateSumN(number),
        this.appService.calculateFibonacci(number),
        this.appService.calculateFactors(number),
      ]);

    return {
      ...parityResult,
      ...primeResult,
      factorial,
      sumN,
      fibonacci,
      factors,
    };
  }
}
