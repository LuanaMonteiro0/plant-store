import { TunnelCatFactory } from '@core/tunnelCat/tunnel-cat.factory'
import { Controller } from '@nestjs/common'

@Controller()
export class PlantCategoryController {
  constructor(private readonly tunnelCat: TunnelCatFactory) {}
}
