import { Test, TestingModule } from '@nestjs/testing';
import { PrimeController } from './prime.controller';
import { PrimeService } from './prime.service';

describe('PrimeController', () => {
  let primeController: PrimeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PrimeController],
      providers: [PrimeService],
    }).compile();

    primeController = app.get<PrimeController>(PrimeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(primeController.getHello()).toBe('Hello World!');
    });
  });
});
