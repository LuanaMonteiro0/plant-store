import { TunnelCatClient } from '@core/tunnelCat'
import { GetPlantCategoryDTO } from './dto'
import { PlantCategory } from './types'

interface getPlantCategoryParams extends GetPlantCategoryDTO {}

export async function getPlantCategory(
  client: TunnelCatClient,
  params: getPlantCategoryParams,
): Promise<PlantCategory> {
  try {
    const query = `
    SELECT 
        id,
        name
     FROM plant_category WHERE id=$id
    `
    const values = {
      id: params.id,
    }

    const response = await client.query<PlantCategory>({ query, values })
    const plantCategory = response[0]
    return plantCategory
  } catch (err) {
    console.log(err)
    return err
  }
}
