import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class GetPlantCategoryDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number

  @IsString()
  @IsNotEmpty()
  name: string
}
