import { Controller, Get } from '@nestjs/common';
import { MicroservicesService } from './microservices.service';

@Controller()
export class MicroservicesController {
  constructor(private readonly microservicesService: MicroservicesService) {}

  @Get()
  getHello(): string {
    return this.microservicesService.getHello();
  }
}
