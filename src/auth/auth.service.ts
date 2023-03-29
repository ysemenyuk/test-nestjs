import { Model } from 'mongoose';
import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Auth, AuthDocument } from './auth.schema';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Auth.name) private authModel: Model<AuthDocument>) {}

  async register(authDto: AuthDto): Promise<any> {
    const { email, password } = authDto;

    const existingUser = await this.authModel.findOne({ email }).exec();
    if (existingUser) {
      throw new BadRequestException();
    }

    const newUser = new this.authModel({ email, password });
    await newUser.save();

    return { email, token: 'token' };
  }

  async login(authDto: AuthDto): Promise<any> {
    const { email, password } = authDto;

    const user = await this.authModel.findOne({ email }).exec();
    if (!user) {
      throw new UnauthorizedException();
    }

    const isCorrectPassword = password === user.password;
    if (!isCorrectPassword) {
      throw new UnauthorizedException();
    }

    return { email, token: 'token' };
  }
}
