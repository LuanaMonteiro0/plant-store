import { TunnelCatFactory } from '@core/tunnelCat/tunnel-cat.factory'
import { Controller } from '@nestjs/common'

@Controller()
export class UserController {
  constructor(private readonly tunnelCat: TunnelCatFactory) {}
}
