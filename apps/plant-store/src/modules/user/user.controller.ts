import { Body, Controller, Get, Param, Post } from '@nestjs/common'

import { TunnelCatFactory } from '@core/tunnelCat/tunnel-cat.factory'

import { listUserPlants } from './use-cases/list-user-plants'
import { createUser, CreateUserDTO } from './use-cases/create-user'
import { loginUser, LoginUserDTO } from './use-cases/login'

@Controller('/user' )
export class UserController {
  constructor(private readonly tunnelCat: TunnelCatFactory) {}

    @Post('/')
    async createUser(@Body() body: CreateUserDTO) {
      const client = await this.tunnelCat.connect()

      try {
        const response = await createUser(client, {...body})
  
        return response
      } catch (err) {
        throw err
      } finally {
        await client.release()
      }
    }

   @Get('/:userId')
   async listUserPlants(@Param() param: number) {
     const client = await this.tunnelCat.connect()
 
     try {
       const response = await listUserPlants(client,{userId: param})
 
       return response
     } catch (err) {
       throw err
     } finally {
       await client.release() 
     }
   }


   @Post('/login')
  async loginUser(@Body() body: LoginUserDTO) {
    const client = await this.tunnelCat.connect()
    try {
      const user = await loginUser(client, { ...body })
      if (!user) {
        return { message: 'Invalid credentials' }
      }
      return user
    } finally {
      await client.release()
    }
  }
}
