import { IsNotEmpty, IsNumber } from 'class-validator'

export class GetPlantDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number
}
