import { TunnelCatClient } from '@core/tunnelCat'
import { CreatePlantDTO } from './dto'

interface createPlantParams extends CreatePlantDTO {}

export function createPlant(
  client: TunnelCatClient,
  params: createPlantParams,
) {
  try {
    client.startTransaction()

    const query = 'asas'

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

    client.query({ query, values })

    client.commitTransaction()
  } catch (err) {
    console.log(err)
  }
}
