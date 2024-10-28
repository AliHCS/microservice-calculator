import { Test, TestingModule } from '@nestjs/testing';
import { FactorsController } from './factors.controller';
import { FactorsService } from './factors.service';

describe('FactorsController', () => {
  let factorsController: FactorsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FactorsController],
      providers: [FactorsService],
    }).compile();

    factorsController = app.get<FactorsController>(FactorsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(factorsController.getHello()).toBe('Hello World!');
    });
  });
});
