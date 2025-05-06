import { Module } from '@nestjs/common'
import { PlantTypeController } from './plant-type.controller'

@Module({
    imports: [],
    controllers: [PlantTypeController],
    providers: [],
})
export class PlantTypeModule { }
