import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class ListPlantCategoryDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number

  @IsString()
  @IsNotEmpty()
  name: string
}
