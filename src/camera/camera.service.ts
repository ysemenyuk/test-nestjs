import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Camera, CameraDocument } from './camera.schema';
import { CameraDto } from './dto/camera.dto';

@Injectable()
export class CameraService {
  private readonly logger = new Logger(CameraService.name);

  constructor(
    @InjectModel(Camera.name) private cameraModel: Model<CameraDocument>,
  ) {}

  async create(cameraDto: CameraDto): Promise<Camera> {
    const camera = new this.cameraModel(cameraDto);
    return await camera.save();
  }

  async findAll(): Promise<Camera[]> {
    this.logger.log('this.cameraModel.find().exec()... ');
    return await this.cameraModel.find().exec();
  }
}
