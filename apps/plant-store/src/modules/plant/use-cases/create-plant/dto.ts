import {
  IsInt,
  IsString,
  IsNotEmpty,
  IsOptional,
  IsBoolean,
  IsNumber,
  IsDate,
  IsPositive,
  Min,
  Max,
  isPositive,
} from 'class-validator'
import { Type } from 'class-transformer'

export class CreatePlantDTO {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  subtitle: string

  @IsNumber()
  @IsPositive()
  price: number

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(100)
  discountPercentage?: number

  @IsString()
  @IsNotEmpty()
  description: string

  @IsString()
  @IsNotEmpty()
  features: string

  @IsOptional()
  @IsString()
  imgUrl?: string

  @IsBoolean()
  isInSale: boolean

  @IsNumber()
  @IsNotEmpty()
  plantCategoryId: number
}
