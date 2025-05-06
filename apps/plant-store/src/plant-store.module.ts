import { Module } from '@nestjs/common'
import { TunnelCatModule } from '@core/tunnelCat'

import { PlantStoreController } from './plant-store.controller'

@Module({
  imports: [TunnelCatModule],
  controllers: [PlantStoreController],
  providers: [],
})
export class PlantStoreModule {}
