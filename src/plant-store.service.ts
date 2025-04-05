import { Injectable } from '@nestjs/common'

@Injectable()
export class PlantStoreService {
  getHello(): string {
    return 'Hello World!'
  }
}
