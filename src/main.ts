import * as fs from 'fs';

import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  const configService = new ConfigService();

  const httpsOptions = {
    key: fs.readFileSync(configService.get('CERT_KEY_URL')),
    cert: fs.readFileSync(configService.get('CERT_URL')),
  };  

  const app = await NestFactory.create(AppModule, { httpsOptions });
 
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
