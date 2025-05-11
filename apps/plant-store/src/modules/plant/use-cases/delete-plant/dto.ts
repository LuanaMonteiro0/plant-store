import { IsNotEmpty, IsNumber } from 'class-validator'

export class DeletePlantDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number
}
