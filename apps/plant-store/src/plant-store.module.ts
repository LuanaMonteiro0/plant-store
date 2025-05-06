import { Module } from '@nestjs/common'
import { PlantStoreController } from './plant-store.controller'

@Module({
  imports: [],
  controllers: [PlantStoreController],
  providers: [],
})
export class PlantStoreModule {}
