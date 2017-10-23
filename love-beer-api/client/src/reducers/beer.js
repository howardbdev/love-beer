// const initialState = {
//   name: "",
//   image_url: "",
//   style: "",
//   description: "",
//   upvotes: 0,
// }

export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_BEER_SUCCESS':
      return action.beer;
    default:
      return state;
  }
}
