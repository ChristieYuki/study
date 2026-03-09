import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { UsersService } from 'src/users/users.service';
import { promisify } from 'util';
import { v4 as uuid } from 'uuid'

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService) {}

    async signUp(email: string, password: string, roles: string[] = []) {
        const user = await this.userService.findOneByEmail(email);
        if (user) {
            return new BadRequestException("Email in use");
        }

        const salt = randomBytes(8).toString('hex');
        const hash = await scrypt(password, salt, 32) as Buffer;
        const saltAndHash = `${salt}.${hash.toString('hex')}`;

        const newUser = {
            id: uuid(),
            email, 
            password: saltAndHash,
            roles
        };

        this.userService.create(newUser)
    }

    async signIn(email : string, password: string) {
        const user = await this.userService.findOneByEmail(email);
        if (!user) {
            return new UnauthorizedException("Invalid credentials");
        }

        const [salt, storedHash] = user.password.split('.');
        const hash = (await scrypt(password, salt, 32) as Buffer);

        if ( storedHash != hash.toString('hex') ) {
            return new UnauthorizedException("Invalid credentials");
        }
        const payload = { 
            username: user.email, 
            sub:user.id , 
            roles: user.roles 
        };

        const accessToken = this.jwtService.sign(
            {...payload, type: 'access'},
            { expiresIn: '60s'}
        );

        const refreshToken = this.jwtService.sign(
            {...payload, type: 'refresh'},
            { expiresIn: '1h'}
        );

        user.refreshToken = refreshToken;

        await this.userService.update(user);

        return {accessToken: accessToken, refreshToken: refreshToken}
    }

    async refresh(refreshToken : string) {
        const payload = this.jwtService.verify(refreshToken);
        if ( payload.type !== "refresh" ){
            throw new UnauthorizedException('Invalid Token Type');
        }
        const user = await this.userService.findByIdAndRefreshToken( payload.sub, refreshToken );
        if(!user){
            throw new UnauthorizedException('Invalid Refresh Token');
        }

        const newPayload = { 
            username: user.email, 
            sub:user.id , 
            roles: user.roles 
        };

        const accessToken = this.jwtService.sign(
            {...newPayload, type: 'access'},
            { expiresIn: '60s'}
        );

        const newRefreshToken = this.jwtService.sign(
            {...newPayload, type: 'refresh'},
            { expiresIn: '1h'}
        );

        user.refreshToken = newRefreshToken;

        await this.userService.update(user);

        return {accessToken: accessToken, refreshToken: newRefreshToken}
    }

}
