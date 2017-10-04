const API_URL = 'http://localhost:3001/api';

// ** ACTION CREATORS **

export const setBeers = beers => {
  return {
    type: 'GET_BEERS_SUCCESS',
    beers,
  }
}
// ** ASYNC ACTIONS **
export const getBeers = () => {
  return dispatch => {
    return fetch(`${API_URL}/beers`)
      .then(response => response.json())
      .then(beers => dispatch(setBeers(beers)))
      .catch(error => console.log(error))
  }
}

export const createBeer = beer => {
  return dispatch => {
    return fetch(`${API_URL}/beers`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(beer)
    })
    .then(response => response.json())
    .then(beer => console.log(beer))
    .catch(error => console.log(error))

  }
}
