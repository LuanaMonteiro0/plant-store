import { TunnelCatClient } from '@core/tunnelCat'
import { GetPlantDTO } from './dto'

interface getPlantParams extends GetPlantDTO {}

export async function getPlant(
  client: TunnelCatClient,
  params: getPlantParams,
) {
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

    await client.query({ query, values })
  } catch (err) {
    console.log(err)
  }
}
