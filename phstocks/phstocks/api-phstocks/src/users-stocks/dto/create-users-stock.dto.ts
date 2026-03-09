import { IsNumber, IsString } from "class-validator";

export class CreateUsersStockDto {

    @IsString()
    userId: string;

    @IsNumber()
    stockId: number;

}
