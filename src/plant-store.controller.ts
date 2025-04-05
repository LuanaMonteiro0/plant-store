import { Controller, Get } from '@nestjs/common'
import type { PlantStoreService } from './plant-store.service'

@Controller()
export class PlantStoreController {
  constructor(private readonly plantStoreService: PlantStoreService) {}

  @Get()
  getHello(): string {
    return this.plantStoreService.getHello()
  }
}
