import { Body, Controller, Get, Post } from '@nestjs/common';
import { Camera } from './camera.schema';
import { CameraService } from './camera.service';
import { CameraDto } from './dto/camera.dto';

@Controller('cameras')
export class CameraController {
  constructor(private readonly cameraService: CameraService) {}

  @Post()
  async create(@Body() dto: CameraDto): Promise<Camera> {
    return await this.cameraService.create(dto);
  }

  @Get()
  async findAll(): Promise<Camera[]> {
    return await this.cameraService.findAll();
  }
}
