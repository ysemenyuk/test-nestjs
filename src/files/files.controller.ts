import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { File } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt.guard';
// import { User } from '../decorators/user.decorator';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findMany(): Promise<File[]> {
    return await this.filesService.findMany();
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removeOne(@Param('id', ParseIntPipe) id: number) {
    return await this.filesService.removeOne(id);
  }
}
