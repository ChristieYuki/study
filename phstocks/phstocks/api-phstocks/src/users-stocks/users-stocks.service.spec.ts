import { Test, TestingModule } from '@nestjs/testing';
import { UsersStocksService } from './users-stocks.service';

describe('UsersStocksService', () => {
  let service: UsersStocksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersStocksService],
    }).compile();

    service = module.get<UsersStocksService>(UsersStocksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
