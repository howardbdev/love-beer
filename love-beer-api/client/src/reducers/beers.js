export default (state = [], action) => {
  switch (action.type) {
    case 'GET_BEERS_SUCCESS':
      return action.beers;
    default:
      return state;
  }
}
