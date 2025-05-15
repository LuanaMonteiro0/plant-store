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
  IsArray,
} from 'class-validator'
import { Type } from 'class-transformer'
import { PlantType } from '../../../plant-type/use-cases/get-plant-type/types'

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
  imgurl?: string

  @IsBoolean()
  isInSale: boolean

  @IsNumber()
  @IsNotEmpty()
  plantCategoryId: number

  @IsArray()
  @IsNotEmpty()
  plantTypeId: number[]
}
