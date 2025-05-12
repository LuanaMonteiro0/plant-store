import { TunnelCatFactory } from '@core/tunnelCat/tunnel-cat.factory'
import { Controller, Get, Param } from '@nestjs/common'
import { getPlantType, GetPlantTypeDTO } from './use-cases/get-plant-type'

@Controller()
export class PlantTypeController {
  constructor(private readonly tunnelCat: TunnelCatFactory) {}

    @Get('/')
    async listPlants() {
      const client = await this.tunnelCat.connect()
  
      try {
        //const response = await listPlantTypes(client)
  
        return response
      } catch (err) {
        throw err
      } finally {
      }
    }
  
    @Get('/:id')
    async getPlant(@Param() param: GetPlantTypeDTO) {
      const client = await this.tunnelCat.connect()
  
      try {
        const response = await getPlantType(client, {...param})
  
        return response
      } catch (err) {
        throw err
      } finally {
        client.release()
      }
    }
}
