import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class FactorialService {
  // Escuchar mensajes con el patrón 'factorial_calculate'
  @MessagePattern('factorial_calculate')
  calculateFactorial(number: number): number {
    // Validar si el número es un entero positivo
    if (number == null || number < 0) {
      throw new Error('El número debe ser un entero positivo.');
    }

    // Calcular el factorial
    const result = this.factorial(number);
    console.log(`Received number: ${number}, factorial: ${result}`);
    return result;
  }

  // Método auxiliar para calcular el factorial
  private factorial(n: number): number {
    if (n === 0 || n === 1) return 1; // Base del factorial: 0! = 1, 1! = 1
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}
