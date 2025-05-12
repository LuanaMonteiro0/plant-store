import { TunnelCatFactory } from '@core/tunnelCat/tunnel-cat.factory'
import { Controller, Get, Param } from '@nestjs/common'

import { listPlantCategory } from './use-cases/list-plant-category'
import { getPlantCategory, GetPlantCategoryDTO } from './use-cases/get-plant-category'

@Controller()
export class PlantCategoryController {
  constructor(private readonly tunnelCat: TunnelCatFactory) {}

  @Get('/')
  async listPlants() {
    const client = await this.tunnelCat.connect()

    try {
      const response = await listPlantCategory(client)

      return response
    } catch (err) {
      throw err
    } finally {
    }
  }

  @Get('/:id')
  async getPlant(@Param() param: GetPlantCategoryDTO) {
    const client = await this.tunnelCat.connect()

    try {
      const response = await getPlantCategory(client, {...param})

      return response
    } catch (err) {
      throw err
    } finally {
      client.release()
    }
  }
}
