import * as fs from 'fs';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const path = require('path');

  const basePath = path.resolve(__dirname, '../certs/live/kafel.fr');

  const certPath = fs.readlinkSync(
    path.resolve(__dirname, '../certs/live/kafel.fr/fullchain.pem'),
  );
  const keyPath = fs.readlinkSync(
    path.resolve(__dirname, '../certs/live/kafel.fr/privkey.pem'),
  );

  const httpsOptions = {
    key: fs.readFileSync(path.resolve(basePath, keyPath)),
    cert: fs.readFileSync(path.resolve(basePath, certPath)),
  };

  const app = await NestFactory.create(AppModule, { httpsOptions });

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
