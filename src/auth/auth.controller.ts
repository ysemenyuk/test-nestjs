import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() authDto: AuthDto): Promise<any> {
    return await this.authService.register(authDto);
  }

  @Post('login')
  async login(@Body() authDto: AuthDto): Promise<any> {
    return await this.authService.login(authDto);
  }
}
