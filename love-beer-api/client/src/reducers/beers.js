export default (state = [], action) => {
  let index;
  let beer;
  switch (action.type) {
    case 'GET_BEERS_SUCCESS':
      return action.beers;
    case 'CREATE_BEER_SUCCESS':
      return state.concat(action.beer);
    case 'UPVOTE_BEER':
      index = state.findIndex(beer => beer.id === action.beer_id)
      beer = state[index]

      return [
        ...state.slice(0, index),
        Object.assign({}, beer, {upvotes: beer.upvotes += 1}),
        ...state.slice(index + 1)
      ];
    case 'DOWNVOTE_BEER':
      index = state.findIndex(beer => beer.id === action.beer_id)
      beer = state[index]

      return [
        ...state.slice(0, index),
        Object.assign({}, beer, {upvotes: beer.upvotes -= 1}),
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
}
