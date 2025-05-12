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

    const plantTypeQuery = `SELECT COUNT(*)::int FROM plant_type WHERE id = ANY($plantTypesIds)`

    const plantTypesQueryValues = {
      plantTypesIds: params.plantTypesIds,
    }

    const result = await client.query<{ count: number }>({
      query: plantTypeQuery,
      values: plantTypesQueryValues,
    })

    const allExist = result[0].count === params.plantTypesIds.length

    if (!allExist) {
      throw new Error('Not all types present in DB')
    }

    const plantCategoryQuery =
      'SELECT id FROM plant_category WHERE id = $plantCategoryId'

    const plantCategoryQueryValues = {
      plantCategoryId: params.plantCategoryId,
    }

    const firstResponse = await client.query<PlantCategory>({
      query: plantCategoryQuery,
      values: plantCategoryQueryValues,
    })
    const plantCategory = firstResponse[0]

    if (!plantCategory) {
      throw new Error('Plant Category does not exist.')
    }

    const insertionQuery = `
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

    const insertionQueryValues = {
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
      query: insertionQuery,
      values: insertionQueryValues,
    })
    const plant = response[0]

    for (const plantTypeId of params.plantTypesIds) {
      const plantTypePlantQuery =
        'INSERT INTO plant_type_plant(plant_id, plant_type_id) VALUES($plantId, $plantTypeId)'

      const plantTypePlantQueryValues = {
        plantId: plant.id,
        plantTypeId,
      }

      await client.query({
        query: plantTypePlantQuery,
        values: plantTypePlantQueryValues,
      })
    }

    client.commitTransaction()

    return plant
  } catch (err) {
    console.log(err)
    client.rollbackTransaction()
    return err
  }
}
