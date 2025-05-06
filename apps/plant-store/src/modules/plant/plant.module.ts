import { Module } from '@nestjs/common'
import { PlantController } from './plant.controller'

@Module({
    imports: [],
    controllers: [PlantController],
    providers: [],
})
export class PlantModule { }
