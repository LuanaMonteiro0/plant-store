import { TunnelCatClient } from '@core/tunnelCat'
import { GetPlantDTO } from './dto'
import { Plant } from './types'

interface getPlantParams extends GetPlantDTO {}

export async function getPlant(
  client: TunnelCatClient,
  params: getPlantParams,
): Promise<Plant> {
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
     FROM plant WHERE id=$id
    `
    const values = {
      id: params.id,
    }

    const response = await client.query<Plant>({ query, values })
    const plant = response[0]
    return plant
  } catch (err) {
    console.log(err)
    return err
  }
}
