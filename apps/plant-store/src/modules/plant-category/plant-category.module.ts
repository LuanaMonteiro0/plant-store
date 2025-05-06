import { Module } from '@nestjs/common'
import { PlantCategoryController } from './plant-category.controller'

@Module({
    imports: [],
    controllers: [PlantCategoryController],
    providers: [],
})
export class PlantCategoryModule { }
