import { TunnelCatClient } from '@core/tunnelCat'
import { CreatePlantDTO } from './dto'

interface createPlantParams extends CreatePlantDTO {}

export async function createPlant(
  client: TunnelCatClient,
  params: createPlantParams,
) {
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
    is_in_sale
    ) VALUES(
     $name,
     $subtitle,
     $price,
     $discountPercentage,
     $description,
     $features,
     $imgUrl,
     $isInSale
    )
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

    await client.query({ query, values })

    client.commitTransaction()
  } catch (err) {
    console.log(err)
    client.rollbackTransaction()
  }
}
