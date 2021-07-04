import { ArgsType, Field } from "@nestjs/graphql"
import { IsBoolean, isBoolean, IsString, Length } from "class-validator"

@ArgsType()
export class CreateRestaturantDto {
  @Field(type => String)
  @IsString()
  @Length(5, 10)
  name: string

  @Field(type => Boolean)
  @IsBoolean()
  isVegan: boolean

  @Field(type => String)
  @IsString()
  address: string

  @Field(type => String)
  @IsString()
  ownerName: string
}
