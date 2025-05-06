import { Module } from '@nestjs/common'
import { UserController } from './user.controller'
import { TunnelCatModule } from '@core/tunnelCat'

@Module({
  imports: [TunnelCatModule],
  controllers: [UserController],
  providers: [],
})
export class UserModule {}
