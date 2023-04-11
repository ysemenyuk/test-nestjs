import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { File } from '@prisma/client';

@Injectable()
export class FilesService {
  constructor(private prisma: PrismaService) {}

  createOne(data): Promise<File> {
    return this.prisma.file.create({ data });
  }

  findMany(): Promise<File[]> {
    return this.prisma.file.findMany();
  }

  findOne(id: number) {
    return this.prisma.file.findUnique({ where: { id } });
  }

  updateOne(id: number, data) {
    return this.prisma.file.update({ where: { id }, data });
  }

  removeOne(id: number) {
    return this.prisma.file.delete({ where: { id } });
  }
}
