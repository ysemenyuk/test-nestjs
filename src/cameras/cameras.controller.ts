import { Body, Controller, Get, Post } from '@nestjs/common';
import { CamerasService } from './cameras.service';
import { CreateCameraDto } from './dto/camera.dto';
import { Camera } from '@prisma/client';

@Controller('cameras')
export class CamerasController {
  constructor(private readonly cameraService: CamerasService) {}

  @Post()
  async create(@Body() dto: CreateCameraDto): Promise<Camera> {
    return await this.cameraService.create(dto);
  }

  @Get()
  async findAll(): Promise<Camera[]> {
    return await this.cameraService.findAll();
  }
}
