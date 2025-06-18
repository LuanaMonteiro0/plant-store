import { TunnelCatClient } from '@core/tunnelCat'
import { LoginUserDTO } from './dto'
import { LoginResponse } from './types'

interface LoginUserParams extends LoginUserDTO {}

export async function loginUser(
  client: TunnelCatClient,
  params: LoginUserParams,
): Promise<LoginResponse | null> {
  try {
    const query = `
      SELECT id, email, name
      FROM "user"
      WHERE email = $email AND password = $password
      LIMIT 1
    `
    const values = {
      email: params.email,
      password: params.password,
    }

    const response = await client.query<LoginResponse>({ query, values })
    return response[0] || null
  } catch (err) {
    console.log(err)
    return null
  }
}
