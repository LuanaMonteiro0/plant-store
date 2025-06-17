import { TunnelCatClient } from '@core/tunnelCat'
import { CreateUserDTO } from './dto'
import { userId } from './types'

interface CreateUserParams extends CreateUserDTO {}

export async function createUser(
  client: TunnelCatClient,
  params: CreateUserParams,
): Promise<userId> {
  try {
    const query = `
    INSERT INTO user(
        name,
        email,
        password
      ) VALUES (
        $name,
        $email,
        $password
      ) RETURNING id
    `
    const values = {
      name: params.name,
      email: params.email,
      password: params.password,
    }

    const response = await client.query<userId>({ query, values })
    const userId = response[0]
    return userId
  } catch (err) {
    console.log(err)
    return err
  }
}
