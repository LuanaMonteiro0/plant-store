import { TunnelCatFactory } from '@core/tunnelCat/tunnel-cat.factory'
import { Controller, Get, Param } from '@nestjs/common'

import { getPlantType, GetPlantTypeDTO } from './use-cases/get-plant-type'
import { listPlantTypes } from './use-cases/list-plant-types'

@Controller('plant-type')
export class PlantTypeController {
  constructor(private readonly tunnelCat: TunnelCatFactory) {}

    @Get('/')
    async listPlantTypes() {
      const client = await this.tunnelCat.connect()
  
      try {
        const response = await listPlantTypes(client)
  
        return response
      } catch (err) {
        throw err
      } finally {
        await client.release() 
      }
    }
  
    @Get('/:id')
    async getPlantType(@Param() param: GetPlantTypeDTO) {
      const client = await this.tunnelCat.connect()
  
      try {
        const response = await getPlantType(client, {...param})
  
        return response
      } catch (err) {
        throw err
      } finally {
        await client.release()
      }
    }
}
