import { ConfigService } from '@nestjs/config';

export const getMongoConfig = async (configService: ConfigService) => ({
  uri: configService.get<string>('MONGODB_URI'),
});
