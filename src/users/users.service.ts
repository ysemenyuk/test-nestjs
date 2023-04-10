import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async comparePasswords(password, hashPassword) {
    return await bcrypt.compare(password, hashPassword);
  }

  async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async createOne(data: CreateUserDto) {
    data.password = await this.hashPassword(data.password);
    return await this.prisma.user.create({ data });
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async findOneByEmail(email: string) {
    return await this.prisma.user.findUnique({ where: { email } });
  }

  async updateOne(id: number, data: UpdateUserDto) {
    if (data.password) {
      data.password = await this.hashPassword(data.password);
    }
    return await this.prisma.user.update({ where: { id }, data });
  }

  async removeOne(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
