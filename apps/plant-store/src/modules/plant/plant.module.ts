import { Module } from '@nestjs/common'
import { PlantController } from './plant.controller'
import { TunnelCatModule } from '@core/tunnelCat'

@Module({
  imports: [TunnelCatModule],
  controllers: [PlantController],
  providers: [],
})
export class PlantModule {}
