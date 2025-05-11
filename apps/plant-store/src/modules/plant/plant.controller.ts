import { TunnelCatFactory } from '@core/tunnelCat/tunnel-cat.factory'
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'

import { listPlants } from './use-cases/list-plants'
import { createPlant, CreatePlantDTO } from './use-cases/create-plant'
import { getPlant, GetPlantDTO } from './use-cases/get-plant'
import { updatePlant, UpdatePlantDTO } from './use-cases/update-plant'
import { deletePlant, DeletePlantDTO } from './use-cases/delete-plant'

@Controller('/plants')
export class PlantController {
  constructor(private readonly tunnelCat: TunnelCatFactory) {}

  @Get('/')
  async listPlants() {
    const client = await this.tunnelCat.connect()

    try {
      const response = await listPlants(client)

      return response
    } catch (err) {
      throw err
    } finally {
    }
  }

  @Post('/')
  async createPlant(@Body() body: CreatePlantDTO) {
    const client = await this.tunnelCat.connect()

    try {
      const response = await createPlant(client, {...body})

      return response
    } catch (err) {
      throw err
    } finally {
      client.release()
    }
  }

  @Get('/:id')
  async getPlant(@Param() param: GetPlantDTO) {
    const client = await this.tunnelCat.connect()

    try {
      const response = await getPlant(client, {...param})

      return response
    } catch (err) {
      throw err
    } finally {
      client.release()
    }
  }

  @Put('/:id')
  async updatePlant(@Body() param: UpdatePlantDTO) {
    const client = await this.tunnelCat.connect()

    try {
      const response = await updatePlant(client, {...param})

      return response
    } catch (err) {
      throw err
    } finally {
      client.release()
    }
  }

  @Delete('/:id')
  async deletePlant(@Param() param: DeletePlantDTO) {
    const client = await this.tunnelCat.connect()

    try {
      const response = await deletePlant(client, {...param})

      return response
    } catch (err) {
      throw err
    } finally {
      client.release()
    }
  }
}
