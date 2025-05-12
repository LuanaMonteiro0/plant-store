import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class ListPlantTypeDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number

  @IsString()
  @IsNotEmpty()
  name: string
}
