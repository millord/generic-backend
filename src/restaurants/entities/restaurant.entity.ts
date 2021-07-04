import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class Restaurant {
  @Field(_returns => String)
  name: string

  @Field(type => Boolean, { nullable: true })
  isGood?: boolean
}
