import { Test, TestingModule } from '@nestjs/testing';
import { TransController } from './transactions.controller';
import { TransactionsService } from './transactions.service';

describe( 'TransController', () => {
  let transController: TransController;

  beforeEach(async () => {
    const trans: TestingModule = await Test.createTestingModule({
      controllers: [TransController],
      providers: [TransactionsService],
    }).compile();

    transController = trans.get<TransController>(TransController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(transController.getHello()).toBe('Hello World!');
    });
  });
});
