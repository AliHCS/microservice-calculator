import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class PrimeService {
  @MessagePattern('prime_check')
  isPrime(number: number): boolean {
    if (number < 2) return false; // Los números menores a 2 no son primos
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false; // Si es divisible por algún número, no es primo
    }
    return true; // Si pasa todas las pruebas, es primo
  }
}
