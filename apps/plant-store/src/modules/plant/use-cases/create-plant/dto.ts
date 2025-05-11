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
  discount_percentage?: number

  @IsString()
  @IsNotEmpty()
  description: string

  @IsString()
  @IsNotEmpty()
  features: string

  @IsOptional()
  @IsString()
  img_url?: string

  @IsBoolean()
  is_in_sale: boolean

  @Type(() => Date)
  @IsDate()
  created_at: Date

  @Type(() => Date)
  @IsDate()
  updated_at: Date
}
