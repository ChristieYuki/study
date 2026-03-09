import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { Stock } from './entities/stock.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StocksService {

  constructor(
    @InjectRepository(Stock)
    private readonly repository:Repository<Stock>) {}
  

  create(dto: CreateStockDto) {
    dto.stocks.forEach(stockDto => {
      const stock = this.repository.create(stockDto);
      this.repository.save(stock);
    });
  }

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    return this.repository.findOneBy({ id });
  }

  async remove(id: number) {
    const stock = await this.repository.findOneBy({id});
  
    if (!stock) return null;
    
    return this.repository.remove(stock);
  }
}
