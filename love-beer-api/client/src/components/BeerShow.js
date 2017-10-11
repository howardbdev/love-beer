import React from 'react'
import { getBeer } from '../actions/beers'

const BeerShow = (params) => {
  const beer_id = params["match"]["params"]["id"]
  const beer = getBeer(beer_id)
  console.log("beer id is: ", beer_id)
  console.log("beer is: ", beer)
  return(
    <div>
      I am the beer show page
    </div>
  )
}

export default BeerShow;
