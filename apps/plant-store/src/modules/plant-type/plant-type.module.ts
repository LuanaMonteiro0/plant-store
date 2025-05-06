import { Module } from '@nestjs/common'
import { PlantTypeController } from './plant-type.controller'
import { TunnelCatModule } from '@core/tunnelCat'

@Module({
  imports: [TunnelCatModule],
  controllers: [PlantTypeController],
  providers: [],
})
export class PlantTypeModule {}
