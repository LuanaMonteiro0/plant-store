import { Module } from '@nestjs/common'
import { PlantStoreController } from './plant-store.controller'
import { PlantStoreService } from './plant-store.service'

@Module({
	imports: [],
	controllers: [PlantStoreController],
	providers: [PlantStoreService],
})
export class PlantStoreModule {}
