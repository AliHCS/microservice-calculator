import { Injectable } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Injectable()
export class ParityService {
  isPair(number: number): boolean {
    if (number == null || number < 0) {
      throw new Error('El número debe ser un entero positivo.');
    }
    const result = number % 2 === 0;
    console.log(`Received number: ${number}, isPair: ${result}`);
    return result; // Retornamos directamente un booleano
  }
}
