import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto, LoginDto } from './dto/auth.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto): Promise<any> {
    const { email } = dto;
    const existingUser = await this.usersService.findOneByEmail(email);

    if (existingUser) {
      throw new BadRequestException(`BadRequestException`);
    }

    await this.usersService.createOne(dto);
    const token = await this.jwtService.sign({ email });
    return { email, token };
  }

  async login(dto: LoginDto): Promise<any> {
    const { email } = dto;
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new NotFoundException(`NotFoundException`);
    }

    const isPasswordValid = await this.usersService.comparePasswords(
      dto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('UnauthorizedException');
    }

    const token = await this.jwtService.sign({ email });
    return { email, token };
  }
}
