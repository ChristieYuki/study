import { IsArray, IsString } from "class-validator";
import { StockDto } from "./stock.dto";

export class CreateStockDto {

    @IsArray()
    stocks: Array<StockDto>;

}
