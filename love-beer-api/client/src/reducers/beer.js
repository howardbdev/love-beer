export default (state = [], action) => {
  let beer;
  switch (action.type) {
    case 'GET_BEER_SUCCESS':
      return action.beer;
    default:
      return state;
  }
}
