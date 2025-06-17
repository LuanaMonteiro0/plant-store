import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateUserDTO {
  @IsNumber()
  @IsNotEmpty()
  password: number

  @IsNumber()
  @IsNotEmpty()
  email: number

  @IsString()
  @IsNotEmpty()
  name: string
}
