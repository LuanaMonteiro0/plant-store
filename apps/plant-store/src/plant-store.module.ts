import { Module } from '@nestjs/common'
import { TunnelCatModule } from '@core/tunnelCat'

import { PlantModule } from './modules/plant/plant.module'

import { PlantStoreController } from './plant-store.controller'
import { PlantCategoryController } from './modules/plant-category/plant-category.controller'

@Module({
  imports: [TunnelCatModule, PlantModule, PlantCategoryController],
  controllers: [PlantStoreController],
  providers: [],
})
export class PlantStoreModule {}
