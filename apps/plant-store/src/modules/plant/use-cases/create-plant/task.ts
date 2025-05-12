import { TunnelCatClient } from '@core/tunnelCat'
import { CreatePlantDTO } from './dto'
import { Plant } from './types'

interface createPlantParams extends CreatePlantDTO {}

export async function createPlant(
  client: TunnelCatClient,
  params: createPlantParams,
): Promise<Plant> {
  try {
    client.startTransaction()

    const query = `
    INSERT INTO plant(
    name,
    subtitle,
    price,
    discount_percentage,
    description,
    features,
    img_url,
    is_in_sale,
    created_at,
    updated_at
    ) VALUES(
     $name,
     $subtitle,
     $price,
     $discountPercentage,
     $description,
     $features,
     $imgUrl,
     $isInSale,
     NOW(),
     NOW()
    ) RETURNING id
    `

    const values = {
      name: params.name,
      subtitle: params.subtitle,
      price: params.price,
      discountPercentage: params.discountPercentage,
      description: params.description,
      features: params.features,
      imgUrl: params.imgUrl,
      isInSale: params.isInSale,
    }

    const response = await client.query<Plant>({ query, values })
    const plant = response[0]

    client.commitTransaction()

    return plant
  } catch (err) {
    console.log(err)
    client.rollbackTransaction()
    return err
  }
}
