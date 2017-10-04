// ** ACTION CREATORS **

export const updateBeerFormData = beerFormData => {
  return {
    type: 'UPDATED_BEER_DATA',
    beerFormData,
  }
}
