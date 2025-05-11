import { IsBoolean, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, Max, Min } from 'class-validator'

export class UpdatePlantDTO {
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
}
