import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Camera {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export type CameraDocument = HydratedDocument<Camera>;

export const CameraSchema = SchemaFactory.createForClass(Camera);
