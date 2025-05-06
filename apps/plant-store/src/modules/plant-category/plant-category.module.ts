import { Module } from '@nestjs/common'
import { PlantCategoryController } from './plant-category.controller'
import { TunnelCatModule } from '@core/tunnelCat'

@Module({
  imports: [TunnelCatModule],
  controllers: [PlantCategoryController],
  providers: [],
})
export class PlantCategoryModule {}
