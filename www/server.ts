import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';

import { ApplicationModule } from './modules/app.module';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(ApplicationModule);
  app.use(bodyParser.json());
  await app.listen(3001);
}
bootstrap();
