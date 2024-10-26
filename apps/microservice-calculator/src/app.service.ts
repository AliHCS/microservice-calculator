import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('PARITY_SERVICE') private readonly parityClient: ClientProxy,
    @Inject('PRIME_SERVICE') private readonly primeClient: ClientProxy, // Agregado
  ) {}

  // Método existente para verificar la paridad
  async checkParity(number: number): Promise<{ isPair: boolean }> {
    return firstValueFrom(
      this.parityClient.send<{ isPair: boolean }, number>(
        'parity_check',
        number,
      ),
    );
  }

  // Nuevo método para verificar si es primo
  async checkPrime(number: number): Promise<{ isPrime: boolean }> {
    const isPrime = await firstValueFrom(
      this.primeClient.send<boolean, number>('prime_check', number),
    );
    return { isPrime }; // Devolvemos en formato de objeto
  }
}
