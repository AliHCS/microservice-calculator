import { Injectable } from '@nestjs/common';

@Injectable()
export class FibonacciService {
  calculateFibonacci(n: number): number {
    if (n < 0) {
      throw new Error('El número debe ser positivo.');
    }
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0,
      b = 1,
      temp;

    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }

    return b;
  }
}
