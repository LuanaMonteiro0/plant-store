import { NestFactory } from '@nestjs/core';
import { MicroservicesModule } from './microservices.module';

async function bootstrap() {
  const app = await NestFactory.create(MicroservicesModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
