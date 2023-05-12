import { Test, TestingModule } from '@nestjs/testing';
import { TransfertController } from './transfert.controller';
import { TransfertService } from './transfert.service';

describe( 'TransfertController', () => {
  let transfertController: TransfertController;

  beforeEach(async () => {
    const trans: TestingModule = await Test.createTestingModule({
      controllers: [TransfertController],
      providers: [TransfertService],
    }).compile();

    transfertController = trans.get<TransfertController>(TransfertController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(transfertController.getHello()).toBe('Hello World!');
    });
  });
});
