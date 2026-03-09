import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, NotFoundException, UseGuards } from '@nestjs/common';
import { UsersStocksService } from './users-stocks.service';
import { CreateUsersStockDto } from './dto/create-users-stock.dto';
import { Roles } from 'src/auth/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users-stocks')
export class UsersStocksController {
  constructor(private readonly usersStocksService: UsersStocksService) {}

  @Roles('admin') 
  @UseGuards(JwtAuthGuard)
  @Post()  
  create(@Body() createUsersStockDto: CreateUsersStockDto) {
    return this.usersStocksService.create(createUsersStockDto);
  }

  @Roles('admin') 
  @UseGuards(JwtAuthGuard)
  @Get(':userId')
  async findOne(@Param('userId') userId: string) {
    const userStock = await this.usersStocksService.find(userId);
    if (!userStock) throw new NotFoundException();
    return userStock;
  }

  @Roles('admin') 
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id') id: number) {
    const userStock = await this.usersStocksService.remove(+id);
    if (!userStock) {
      throw new NotFoundException();
    }
  }
}
