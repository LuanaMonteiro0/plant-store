import { TunnelCatClient } from '@core/tunnelCat'
import { CreatePlantDTO } from './dto'

interface createPlantParams extends CreatePlantDTO {}

export function createPlant(client: TunnelCatClient, params: createPlantParams) {
  try {
    client.startTransaction()

    const query = ´´

    const values = {nam: params.name, subtitle: params.subtitle, price: params.price, discountPercentage}

    client.query({ query, values })

    client.commitTransaction()
  } catch (err) {
    console.log(err)
  }
}
