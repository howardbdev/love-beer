import { getComments } from './comments'
const API_URL = 'http://localhost:3001/api';

// ** ACTION CREATORS **

export const setBeers = beers => {
  return {
    type: 'GET_BEERS_SUCCESS',
    beers,
  }
}

export const setBeer = beer => {
  return {
    type: 'GET_BEER_SUCCESS',
    beer,
  }
}

export const addBeer = beer => {
  return {
    type: 'CREATE_BEER_SUCCESS',
    beer
  }
}

export const upvoteBeerClientSide = beer_id => {
  return {
    type: 'UPVOTE_BEER',
    beer_id: beer_id
  }
}

export const downvoteBeerClientSide = beer_id => {
  return {
    type: 'DOWNVOTE_BEER',
    beer_id: beer_id
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

export const createBeer = (beer, history) => {
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
       if (beer.error) { alert("YOUR ERROR:" + beer.error) }
       else {
         history.push(`/beers/${beer.id}`)
         dispatch(addBeer(beer))
       }
     })
    .catch(error => {debugger;alert("whaaaaa" + error)})
  }
}

export const updateBeer = (beer, history) => {
  return dispatch => {
    return fetch(`${API_URL}/beers/${beer.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({beer: beer})
    })
    .then(response => response.json())
    .then(beer => {
       if (beer.error) { alert(beer.error) }
       else {
         history.push(`/beers/${beer.id}`)
         dispatch(setBeer(beer))
       }
     })
    .catch(error => alert(error))
  }
}

export const deleteBeer = (beer_id, history) => {
  return dispatch => {
    return fetch(`${API_URL}/beers/${beer_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": 'application/json'
      },
    })
    .then(resp => {
      console.log(resp)
      history.push(`/beers/`)

     })
    .catch(error => alert(error))
  }
}

export const upvoteBeer = beer_id => {
  return dispatch => {
    return fetch(`${API_URL}/beers/${beer_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({beer: {upvotes: 1}})
    })
    .then(response => response.json())
    .then(beer => {
       if (beer.error) { alert(beer.error) }
       else { dispatch(upvoteBeerClientSide(beer.id)) }
     })
    .catch(error => alert(error))
  }
}

export const downvoteBeer = beer_id => {
  return dispatch => {
    return fetch(`${API_URL}/beers/${beer_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({beer: {upvotes: -1}})
    })
    .then(response => response.json())
    .then(beer => {
       if (beer.error) { alert(beer.error) }
       else { dispatch(downvoteBeerClientSide(beer.id)) }
     })
    .catch(error => alert(error))
  }
}

export const getBeer = (beer_id) => {
  return dispatch => {
    return fetch(`${API_URL}/beers/${beer_id}`)
      .then(response => response.json())
      .then(beer => {
        dispatch(getComments(beer.id))
        return dispatch(setBeer(beer))
      })
      .catch(error => console.log(error))
  }
}

// if (beer.error) { alert(beer.error) }
// else {
//   dispatch(setBeer(beer))
// }
