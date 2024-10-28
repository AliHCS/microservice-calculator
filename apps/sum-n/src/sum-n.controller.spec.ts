import { Test, TestingModule } from '@nestjs/testing';
import { SumNController } from './sum-n.controller';
import { SumNService } from './sum-n.service';

describe('SumNController', () => {
  let sumNController: SumNController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SumNController],
      providers: [SumNService],
    }).compile();

    sumNController = app.get<SumNController>(SumNController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(sumNController.getHello()).toBe('Hello World!');
    });
  });
});
