import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CamerasModule } from './cameras/cameras.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, CamerasModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
