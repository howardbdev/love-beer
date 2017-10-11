const API_URL = 'http://localhost:3001/api';

// ** ACTION CREATORS **

export const setBeer = beer => {
  return {
    type: 'GET_BEER_SUCCESS',
    beer,
  }
}

// ** ASYNC ACTIONS **

export const getBeer = (beer_id) => {
  console.log('IN GETBEER ACTION')
  console.log("URL is ", `${API_URL}/beers/${beer_id}` )
  return dispatch => {
    return fetch(`${API_URL}/beers/${beer_id}`)
      .then(response => response.json())
      .then(beer => dispatch(setBeer(beer)))
      .catch(error => console.log(error))
  }
}
