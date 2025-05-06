import { Module } from '@nestjs/common';
import { MicroservicesController } from './microservices.controller';
import { MicroservicesService } from './microservices.service';

@Module({
  imports: [],
  controllers: [MicroservicesController],
  providers: [MicroservicesService],
})
export class MicroservicesModule {}
