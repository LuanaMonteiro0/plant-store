import { TunnelCatClient } from '@core/tunnelCat'
import { Plant } from './types'
// import { ListPlantsDTO } from './dto'

// interface listPlantParams extends ListPlantsDTO {}

export async function listPlants(
  client: TunnelCatClient,
  //   params: listPlantParams,
): Promise<Array<Plant>> {
  try {
    const query = `
    SELECT 
        id,
        name,
        subtitle,
        price, 
        discount_percentage AS discountPercentage,
        description, 
        features, 
        img_url AS imgUrl,
        is_in_sale AS isInSale
     FROM plant
    `
    const response = await client.query<Plant>({ query })
    return response
  } catch (err) {
    console.log(err)
    return err
  }
}
