import { TunnelCatClient } from '@core/tunnelCat'
import { DeletePlantDTO } from './dto'

interface deletePlantParams extends DeletePlantDTO {}

export async function deletePlant(
  client: TunnelCatClient,
  params: deletePlantParams,
) {
  try {
    client.startTransaction()

    const query = `
    DELETE FROM plant WHERE id=$id
    `
    const values = {
      id: params.id,
    }

    await client.query({ query, values })

    client.commitTransaction()
  } catch (err) {
    console.log(err)
    client.rollbackTransaction()
  }
}
