import { TunnelCatClient } from '@core/tunnelCat'
// import { ListPlantCategoryDTO } from './dto'
import { PlantType } from './types'

// interface ListPlantTypeParams extends ListPlantTypeDTO {}

export async function listPlantType(
  client: TunnelCatClient,
  //   params: ListPlantTypeParams,
): Promise<Array<PlantType>> {
  try {
    const query = `
    SELECT 
        id,
        name
     FROM plant_type
    `

    const plantTypeEntitiesArray = await client.query<PlantType>({
      query,
    })
    return plantTypeEntitiesArray
  } catch (err) {
    console.log(err)
    return err
  }
}
