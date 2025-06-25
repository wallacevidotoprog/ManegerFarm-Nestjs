import { Body, Controller, Get, HttpCode, HttpStatus, Post,Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Response } from 'express';
import { CreateUserDto } from 'src/user/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.ACCEPTED)
  @Post('login')
  async login(@Body() createAuthDto: AuthDto, @Res({ passthrough: true }) res: Response) {
    return await this.authService.aLogin(createAuthDto, res );
  }

  @HttpCode(HttpStatus.OK)
  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    return await this.authService.aLogout(res);
  }

  @HttpCode(HttpStatus.OK)
  @Get('check')
  async checkAuth(@Res({ passthrough: true }) res: Response) {
    return await this.authService.aCheckAuth(res);
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  async register(@Body() createDto: CreateUserDto, @Res({ passthrough: true }) res: Response) {
    return await this.authService.aRegister(createDto, res);
  }
}
