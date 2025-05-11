import { TunnelCatClient } from '@core/tunnelCat'
import { UpdatePlantDTO } from './dto'
import { Plant } from './types'

interface updatePlantParams extends UpdatePlantDTO {}

export async function updatePlant(
  client: TunnelCatClient,
  params: updatePlantParams,
): Promise<Plant> {
  try {
    client.startTransaction()

    const query = `
    UPDATE plant SET 
        name = $name,
        subtitle = $subtitle,
        price = $price, 
        discount_percentage = $discountPercentage,
        description = $description, 
        features = $features, 
        img_url = $imgUrl,
        is_in_sale = $isInSale
     WHERE id=$id RETURNING id
    `

    const values = {
      id: params.id,
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
    const updatedPlant = response[0]
    client.commitTransaction()

    return updatedPlant
  } catch (err) {
    console.log(err)
    client.rollbackTransaction()
    return err
  }
}
