import * as fs from 'fs';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires

  const app = await NestFactory.create(AppModule);

  
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
