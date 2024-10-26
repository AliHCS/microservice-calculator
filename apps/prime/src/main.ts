import { NestFactory } from '@nestjs/core';
import { PrimeModule } from './prime.module';

async function bootstrap() {
  const app = await NestFactory.create(PrimeModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
