const API_URL = 'http://localhost:3001/api';

// ** ACTION CREATORS **

export const setBeers = beers => {
  return {
    type: 'GET_BEERS_SUCCESS',
    beers,
  }
}

export const addBeer = beer => {
  return {
    type: 'CREATE_BEER_SUCCESS',
    beer
  }
}

export const upvoteBeer = beer => {
  return {
    type: 'UPVOTE_BEER',
    beer
  }
}

export const downvoteBeer = beer => {
  return {
    type: 'DOWNVOTE_BEER',
    beer
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
      body: JSON.stringify({beer: beer})
    })
    .then(response => response.json())
    .then(beer => {
       if (beer.error) { alert(beer.error) }
       else { dispatch(addBeer(beer)) }
     })
    .catch(error => alert(error))
  }
}
