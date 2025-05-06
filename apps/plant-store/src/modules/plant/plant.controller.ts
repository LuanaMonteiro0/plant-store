import { TunnelCatFactory } from '@core/tunnelCat/tunnel-cat.factory'
import { Controller } from '@nestjs/common'

@Controller()
export class PlantController {
  constructor(private readonly tunnelCat: TunnelCatFactory) {}
}
