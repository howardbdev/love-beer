export default (state = [], action) => {

  switch (action.type) {
    case 'SET_COMMENTS_SUCCESS':
      return action.comments;
    case 'CREATE_COMMENT_SUCCESS':
      return state.concat(action.comment)
    default:
      return state;
  }
}
