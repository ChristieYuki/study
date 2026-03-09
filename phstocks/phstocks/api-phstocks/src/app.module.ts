import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { FeatureModule } from './feature/feature.module';
import { StocksModule } from './stocks/stocks.module';
import { UsersStocksModule } from './users-stocks/users-stocks.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db.sqlite",
      entities: [
        './dist/users/entities/user.entity.js', 
        './dist/stocks/entities/stock.entity.js',
        './dist/users-stocks/entities/users-stocks.entity.js'
      ],
      synchronize: true
    }),
    UsersModule,
    AuthModule,
    FeatureModule,
    StocksModule,
    UsersStocksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
