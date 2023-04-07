import { Injectable } from '@nestjs/common';
import { CreateCameraDto } from './dto/camera.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Camera } from '@prisma/client';

@Injectable()
export class CamerasService {
  constructor(private prisma: PrismaService) {}

  async createOne(data: CreateCameraDto): Promise<Camera> {
    console.log('CamerasService create()', { data });
    return this.prisma.camera.create({ data });
  }

  async findMany(): Promise<Camera[]> {
    return this.prisma.camera.findMany();
  }
}
