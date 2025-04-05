import { NestFactory } from '@nestjs/core'
import { PlantStoreModule } from './plant-store.module'

async function bootstrap() {
  const app = await NestFactory.create(PlantStoreModule)
  await app.listen(process.env.PORT ?? 3000)
}
bootstrap()
