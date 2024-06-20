import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @ApiTags('Auth')
    @Post('/login')
    async login(@Body() body) {
        const token = await this.authService.generateToken(body);
        return {token};
    }
}