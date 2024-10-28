import { Injectable } from '@nestjs/common';

@Injectable()
export class SumNService {
  calculateSum(n: number): number {
    if (n < 0) {
      throw new Error('El número debe ser positivo.');
    }

    // Fórmula de la suma: n * (n + 1) / 2
    return (n * (n + 1)) / 2;
  }
}
