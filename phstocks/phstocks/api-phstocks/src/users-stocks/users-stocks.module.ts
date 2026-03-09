import { Module } from '@nestjs/common';
import { UsersStocksService } from './users-stocks.service';
import { UsersStocksController } from './users-stocks.controller';
import { UsersStocks } from './entities/users-stocks.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { StocksService } from 'src/stocks/stocks.service';
import { Stock } from 'src/stocks/entities/stock.entity';

@Module({
  imports:[AuthModule, TypeOrmModule.forFeature([UsersStocks, Stock])],
  controllers: [UsersStocksController],
  providers: [UsersStocksService, StocksService],
})
export class UsersStocksModule {}
