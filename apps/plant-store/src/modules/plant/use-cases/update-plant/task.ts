import { TunnelCatClient } from '@core/tunnelCat'
import { UpdatePlantDTO } from './dto'

interface updatePlantParams extends UpdatePlantDTO {}

export async function updatePlant(
  client: TunnelCatClient,
  params: updatePlantParams,
) {
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
     WHERE id=$id
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

    await client.query({ query, values })

    client.commitTransaction()
  } catch (err) {
    console.log(err)
    client.rollbackTransaction()
  }
}
