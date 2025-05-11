import { TunnelCatClient } from '@core/tunnelCat'
// import { ListPlantCategoryDTO } from './dto'
import { PlantCategory } from './types'

// interface ListPlantCategoryParams extends ListPlantCategoryDTO {}

export async function getPlantCategory(
  client: TunnelCatClient,
  //   params: ListPlantCategoryParams,
): Promise<Array<PlantCategory>> {
  try {
    const query = `
    SELECT 
        id,
        name
     FROM plant_category
    `

    const plantCategoryEntitiesArray = await client.query<PlantCategory>({
      query,
    })
    return plantCategoryEntitiesArray
  } catch (err) {
    console.log(err)
    return err
  }
}
