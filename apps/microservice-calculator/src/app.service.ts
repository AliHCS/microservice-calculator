import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('PARITY_SERVICE') private readonly parityClient: ClientProxy,
    @Inject('PRIME_SERVICE') private readonly primeClient: ClientProxy, // Agregado
    @Inject('FACTORIAL_SERVICE') private readonly factorialClient: ClientProxy, // Agregado
    @Inject('SUMN_SERVICE') private readonly sumNClient: ClientProxy,
  ) {}

  // Método  para verificar la paridad
  async checkParity(number: number): Promise<{ isPair: boolean }> {
    return firstValueFrom(
      this.parityClient.send<{ isPair: boolean }, number>(
        'parity_check',
        number,
      ),
    );
  }

  // Método para verificar si es primo
  async checkPrime(number: number): Promise<{ isPrime: boolean }> {
    const isPrime = await firstValueFrom(
      this.primeClient.send<boolean, number>('prime_check', number),
    );
    return { isPrime }; // Devolvemos en formato de objeto
  }
  // Método para verificar si es primo
  async calculateFactorial(number: number): Promise<number> {
    const factorial = await firstValueFrom(
      this.factorialClient.send<number, number>('factorial_check', number),
    );
    return factorial; // Devolvemos en formato de objeto
  }

  async calculateSumN(number: number): Promise<number> {
    return firstValueFrom(
      this.sumNClient.send<number, number>('sumN_calculate', number),
    );
  }
}
