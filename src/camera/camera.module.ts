import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CameraController } from './camera.controller';
import { CameraService } from './camera.service';
import { Camera, CameraSchema } from './camera.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Camera.name, schema: CameraSchema }]),
  ],
  controllers: [CameraController],
  providers: [CameraService],
})
export class CameraModule {}
