import { TunnelCatClient } from '@core/tunnelCat'
import { GetPlantTypeDTO } from './dto'
import { PlantType } from './types'

interface GetPlantTypeParams extends GetPlantTypeDTO {}

export async function getPlantType(
  client: TunnelCatClient,
  params: GetPlantTypeParams,
): Promise<PlantType> {
  try {
    const query = `
    SELECT 
        id,
        name
     FROM plant_type WHERE id=$id
    `
    const values = {
      id: params.id,
    }

    const response = await client.query<PlantType>({ query, values })
    const plantType = response[0]
    return plantType
  } catch (err) {
    console.log(err)
    return err
  }
}
