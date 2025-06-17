import { TunnelCatClient } from '@core/tunnelCat'
import { Plant } from './types'

interface listUserPlantsParams {
  userId
}

export async function listUserPlants(
  client: TunnelCatClient,
  params: listUserPlantsParams,
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
     INNER JOIN user_plant 
      ON user_plant.plant_id = plant.id
     WHERE
      user_plant.user_id = $userId
    `

    const values = {
      userId: params.userId,
    }

    const response = await client.query<Plant>({ query, values })

    return response
  } catch (err) {
    console.log(err)
    return err
  }
}
