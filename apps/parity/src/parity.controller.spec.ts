import { Test, TestingModule } from '@nestjs/testing';
import { ParityController } from './parity.controller';
import { ParityService } from './parity.service';

describe('ParityController', () => {
  let parityController: ParityController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ParityController],
      providers: [ParityService],
    }).compile();

    parityController = app.get<ParityController>(ParityController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(parityController.getHello()).toBe('Hello World!');
    });
  });
});
