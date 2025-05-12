import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class GetPlantTypeDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number

  @IsString()
  @IsNotEmpty()
  name: string
}
