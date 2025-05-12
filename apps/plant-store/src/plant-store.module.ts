import { Module } from '@nestjs/common'
import { TunnelCatModule } from '@core/tunnelCat'

import { PlantModule } from './modules/plant/plant.module'

import { PlantStoreController } from './plant-store.controller'
import { PlantTypeModule } from './modules/plant-type/plant-type.module'
import { PlantCategoryModule } from './modules/plant-category/plant-category.module'

@Module({
  imports: [TunnelCatModule, PlantModule, PlantCategoryModule, PlantTypeModule],
  controllers: [PlantStoreController],
  providers: [],
})
export class PlantStoreModule {}
