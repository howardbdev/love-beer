import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';



const beersReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_BEERS_SUCCESS':
      return action.beers;
    default:
      return state;
  }
}

const reducers = combineReducers({
  beers: beersReducer
});
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)
