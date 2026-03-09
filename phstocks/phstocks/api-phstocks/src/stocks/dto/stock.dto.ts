import { IsString } from "class-validator";

export class StockDto {

    @IsString()
    code: string;

    @IsString()
    name: string;

    @IsString()
    fullName: string;

}