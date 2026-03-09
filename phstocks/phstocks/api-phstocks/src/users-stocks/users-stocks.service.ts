import { Injectable } from '@nestjs/common';
import { CreateUsersStockDto } from './dto/create-users-stock.dto';
import { UsersStocks } from './entities/users-stocks.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StocksService } from 'src/stocks/stocks.service';
import { promises } from 'dns';
import { Stock } from 'src/stocks/entities/stock.entity';

@Injectable()
export class UsersStocksService {

  constructor(
    @InjectRepository(UsersStocks)
    private readonly repository: Repository<UsersStocks>,
    private readonly stocksService: StocksService) { }

  create(privateStock: CreateUsersStockDto) {
    const userStock = this.repository.create(privateStock);
    this.repository.save(userStock);
  }

  async find(userId: string) {
    const userStocks = await this.repository.find({where: {userId: userId}});
    const listStocks: ( any | null) = [];

    await Promise.all(
      userStocks.map(async (userStock) => {
        const stock =  await this.stocksService.findOne(userStock.stockId);
        const userStockResult = {
          id: userStock.id,
          stockId: stock?.id,
          code: stock?.code,
          name: stock?.name,
          fullName: stock?.fullName
        }
        listStocks.push(userStockResult);
      })
    );
    
    return {userId: userId, stocks: listStocks};
  }

  async remove(id: number) {
    const userStock = await this.repository.findOneBy({ id });

    if (!userStock) return null;
    return await this.repository.remove(userStock);
  }
}
