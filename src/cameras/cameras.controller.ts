import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CamerasService } from './cameras.service';
import { CreateCameraDto } from './dto/camera.dto';
import { Camera } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('cameras')
export class CamerasController {
  constructor(private readonly cameraService: CamerasService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createOne(@Body() dto: CreateCameraDto): Promise<Camera> {
    return await this.cameraService.createOne(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findMany(): Promise<Camera[]> {
    return await this.cameraService.findMany();
  }
}
