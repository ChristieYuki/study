import { IsArray, IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email: string;
    
    @IsString()
    password: string;
    
    roles: string[];

    refreshToken?: string;
}
