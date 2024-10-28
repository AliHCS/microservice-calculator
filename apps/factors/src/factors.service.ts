import { Injectable } from '@nestjs/common';

@Injectable()
export class FactorsService {
  calculateFactors(n: number): number[] {
    if (n <= 0) {
      throw new Error('El número debe ser un entero positivo.');
    }

    const factors: number[] = [];
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        factors.push(i);
      }
    }
    return factors;
  }
}
