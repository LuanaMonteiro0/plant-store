import { TunnelCatFactory } from '@core/tunnelCat/tunnel-cat.factory'
import { Controller, Get, HttpStatus } from '@nestjs/common'

@Controller()
export class PlantStoreController {
  constructor(private readonly tunnelCat: TunnelCatFactory) {}

  @Get()
  healthCheck(): HttpStatus {
    return HttpStatus.OK
  }
}
