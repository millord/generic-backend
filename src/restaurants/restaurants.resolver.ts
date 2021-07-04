import { Args, Mutation, Query, Resolver } from "@nestjs/graphql"
import { CreateRestaturantDto } from "./dtos/create-restaurant.dto"
import { Restaurant } from "./entities/restaurant.entity"

@Resolver(of => Restaurant)
export class RestaurantResolver {
  @Query(returns => [Restaurant])
  myRestaturant(@Args("veganONly") veganOnly: boolean): Restaurant[] {
    return []
  }

  @Mutation(returns => Boolean)
  createRestaurant(@Args() createRestaturantDto: CreateRestaturantDto): boolean {
    return true
  }
}
