import { Injectable } from '@nestjs/common';
import { CreateCameraDto, UpdateCameraDto } from './dto/camera.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Camera } from '@prisma/client';

@Injectable()
export class CamerasService {
  constructor(private prisma: PrismaService) {}

  createOne(data: CreateCameraDto): Promise<Camera> {
    return this.prisma.camera.create({ data });
  }

  findMany(): Promise<Camera[]> {
    return this.prisma.camera.findMany();
  }

  findOne(id: number) {
    return this.prisma.camera.findUnique({ where: { id } });
  }

  updateOne(id: number, data: UpdateCameraDto) {
    return this.prisma.camera.update({ where: { id }, data });
  }

  removeOne(id: number) {
    return this.prisma.camera.delete({ where: { id } });
  }
}
