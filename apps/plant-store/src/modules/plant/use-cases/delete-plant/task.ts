import { TunnelCatClient } from '@core/tunnelCat'
import { DeletePlantDTO } from './dto'
import { Plant } from './types'

interface deletePlantParams extends DeletePlantDTO {}

export async function deletePlant(
  client: TunnelCatClient,
  params: deletePlantParams,
): Promise<Plant> {
  try {
    client.startTransaction()

    const query = `
    DELETE FROM plant WHERE id=$id RETURNING id
    `
    const values = {
      id: params.id,
    }

    const response = await client.query<Plant>({ query, values })

    client.commitTransaction()

    return response[0]
  } catch (err) {
    console.log(err)
    client.rollbackTransaction()
    return err
  }
}
