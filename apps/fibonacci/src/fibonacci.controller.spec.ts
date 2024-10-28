import { Test, TestingModule } from '@nestjs/testing';
import { FibonacciController } from './fibonacci.controller';
import { FibonacciService } from './fibonacci.service';

describe('FibonacciController', () => {
  let fibonacciController: FibonacciController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FibonacciController],
      providers: [FibonacciService],
    }).compile();

    fibonacciController = app.get<FibonacciController>(FibonacciController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(fibonacciController.getHello()).toBe('Hello World!');
    });
  });
});
