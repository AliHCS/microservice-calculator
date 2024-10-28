import { Test, TestingModule } from '@nestjs/testing';
import { FactorialController } from './factorial.controller';
import { FactorialService } from './factorial.service';

describe('FactorialController', () => {
  let factorialController: FactorialController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FactorialController],
      providers: [FactorialService],
    }).compile();

    factorialController = app.get<FactorialController>(FactorialController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(factorialController.getHello()).toBe('Hello World!');
    });
  });
});
