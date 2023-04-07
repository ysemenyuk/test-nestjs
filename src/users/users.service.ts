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
    return this.prisma.user.create({ data });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  findOneByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  updateOne(id: number, data: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data });
  }

  removeOne(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
