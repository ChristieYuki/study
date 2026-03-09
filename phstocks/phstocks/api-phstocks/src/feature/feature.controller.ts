import { Controller, Get, UseGuards } from '@nestjs/common';
import { currentUser } from 'src/auth/dto/current-user.decorator';
import { CurrentUserDto } from 'src/auth/dto/current-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles.decorator';

@Controller('feature')
export class FeatureController {

    @Get('public')
    getPublicFeature() {
        return 'This is public feature'
    }

    @Get('private')
    @UseGuards(JwtAuthGuard)
    getPrivateFeature(@currentUser() user: CurrentUserDto) {
        return `This is private feature for user ${JSON.stringify(user)}`
    }

    @Get('admin')
    @Roles('admin') 
    @UseGuards(JwtAuthGuard)
    getAdminFeature() {
        return `This is admin feature`;
    }

}
