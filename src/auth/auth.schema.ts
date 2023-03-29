import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Auth {
  @Prop()
  email: string;

  @Prop()
  password: string;
}

export type AuthDocument = HydratedDocument<Auth>;

export const AuthSchema = SchemaFactory.createForClass(Auth);
