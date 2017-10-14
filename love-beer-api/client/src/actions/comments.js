const API_URL = 'http://localhost:3001/api';

// ** ACTION CREATORS **

export const addComment = comment => {
  console.log("addComment action comment is ", comment)
  return {
    type: 'CREATE_COMMENT_SUCCESS',
    comment
  }
}

// ** ASYNC ACTIONS **

export const createComment = comment => {
  return dispatch => {
    return fetch(`${API_URL}/comments`, {
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
