import { TunnelCatClient } from '@core/tunnelCat'
import { CreatePlantDTO } from './dto'
import { Plant, PlantCategory } from './types'

interface createPlantParams extends CreatePlantDTO {}

export async function createPlant(
  client: TunnelCatClient,
  params: createPlantParams,
): Promise<Plant> {
  try {
    client.startTransaction()

    console.log(params)

    const firstQuery =
      'SELECT id FROM plant_category WHERE id = $plantCategoryId'

    const firstQueryValues = {
      plantCategoryId: params.plantCategoryId,
    }

    const firstResponse = await client.query<PlantCategory>({
      query: firstQuery,
      values: firstQueryValues,
    })
    const plantCategory = firstResponse[0]

    if (!plantCategory) {
      throw new Error('Plant Category does not exist.')
    }

    const secondQuery = `
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
    updated_at, 
    plant_category_id
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
     NOW(),
     $plantCategoryId
    ) RETURNING id
    `

    const secondQueryValues = {
      name: params.name,
      subtitle: params.subtitle,
      price: params.price,
      discountPercentage: params.discountPercentage,
      description: params.description,
      features: params.features,
      imgUrl: params.imgUrl,
      isInSale: params.isInSale,
      plantCategoryId: params.plantCategoryId,
    }

    const response = await client.query<Plant>({
      query: secondQuery,
      values: secondQueryValues,
    })
    const plant = response[0]

    client.commitTransaction()

    return plant
  } catch (err) {
    console.log(err)
    client.rollbackTransaction()
    return err
  }
}
