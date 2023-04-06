import { ConfigService } from '@nestjs/config';

export const getPostgresConfig = async (configService: ConfigService) => ({
  uri: configService.get<string>('DATABASE_URL'),
});
