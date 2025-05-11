import { Module } from '@nestjs/common'
import { TunnelCatModule } from '@core/tunnelCat'

import { PlantStoreController } from './plant-store.controller'
import { PlantModule } from './modules/plant/plant.module'

@Module({
  imports: [TunnelCatModule, PlantModule],
  controllers: [PlantStoreController],
  providers: [],
})
export class PlantStoreModule {}
