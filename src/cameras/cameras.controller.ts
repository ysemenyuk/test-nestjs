import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Put,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CamerasService } from './cameras.service';
import { CreateCameraDto, UpdateCameraDto } from './dto/camera.dto';
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

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCameraDto,
  ): Promise<Camera> {
    return await this.cameraService.updateOne(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removeOne(@Param('id', ParseIntPipe) id: number) {
    return await this.cameraService.removeOne(id);
  }
}
