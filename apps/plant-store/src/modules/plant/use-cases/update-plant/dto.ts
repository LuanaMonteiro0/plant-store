import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator'

export class UpdatePlantDTO {
  @IsNumber()
  @IsNotEmpty()
  id: number

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
}
