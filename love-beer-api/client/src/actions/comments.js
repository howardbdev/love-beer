const API_URL = 'http://localhost:3001/api';

// ** ACTION CREATORS **

export const addComment = comment => {
  console.log("addComment action comment is ", comment)
  return {
    type: 'CREATE_COMMENT_SUCCESS',
    comment
  }
}

export const setComments = comments => {
  return {
    type: 'SET_COMMENTS_SUCCESS',
    comments
  }
}

// ** ASYNC ACTIONS **

export const createComment = comment => {
  console.log('in comments.js createComment COMMENT ARG IS ', comment)
  return dispatch => {
    return fetch(`${API_URL}/beers/${comment.beer_id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({comment: comment})
    })
    .then(response => response.json())
    .then(comment => {
       if (comment.error) { alert(comment.error) }
       else dispatch(addComment(comment))
     })
    .catch(error => alert(error))
  }
}

export const getComments = (beer_id) => {
  return dispatch => {
    return fetch(`${API_URL}/beers/${beer_id}/comments`)
      .then(response => response.json())
      .then(comments => dispatch(setComments(comments)))
      .catch(error => console.log(error))
  }
}
