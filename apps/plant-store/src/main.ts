import { NestFactory } from '@nestjs/core'
import { PlantStoreModule } from './plant-store.module'

async function bootstrap() {
  const app = await NestFactory.create(PlantStoreModule)

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })

  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
