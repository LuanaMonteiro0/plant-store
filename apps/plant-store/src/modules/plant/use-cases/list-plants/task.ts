import { TunnelCatClient } from '@core/tunnelCat'
// import { ListPlantsDTO } from './dto'

// interface listPlantParams extends ListPlantsDTO {}

export async function listPlant(
  client: TunnelCatClient,
  //   params: listPlantParams,
) {
  try {
    const query = `
    SELECT 
        id,
        name,
        subtitle,
        price, 
        discount_percentage AS discountPercentage,
        description, 
        features, 
        img_url AS imgUrl,
        is_in_sale AS isInSale
     FROM plant
    `
    await client.query({ query })
  } catch (err) {
    console.log(err)
  }
}
