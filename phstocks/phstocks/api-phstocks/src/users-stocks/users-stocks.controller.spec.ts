import { Test, TestingModule } from '@nestjs/testing';
import { UsersStocksController } from './users-stocks.controller';
import { UsersStocksService } from './users-stocks.service';

describe('UsersStocksController', () => {
  let controller: UsersStocksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersStocksController],
      providers: [UsersStocksService],
    }).compile();

    controller = module.get<UsersStocksController>(UsersStocksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
