const initialState = {
 content: "",
}

export default (state = initialState , action) => {
  switch (action.type) {
    case 'UPDATED_CONTENT_DATA':
      return action.commentFormData;
    default:
      return initialState;
  }
}
