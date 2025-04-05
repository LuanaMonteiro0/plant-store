import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common'

@Controller()
export class PlantStoreController {
  // biome-ignore lint/complexity/noUselessConstructor: <explanation>
  constructor() {}

  @Get()
  healthCheck(): HttpStatus {
    return HttpStatus.OK
  }
}
