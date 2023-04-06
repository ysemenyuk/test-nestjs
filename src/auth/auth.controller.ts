import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto, LoginDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: RegisterDto): Promise<any> {
    return await this.authService.register(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginDto): Promise<any> {
    return await this.authService.login(dto);
  }
}
