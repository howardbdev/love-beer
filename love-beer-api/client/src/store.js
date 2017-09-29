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

cont beers = combineReducers({
  beers: beersReducer
});
const middleware = [thunk];

export default createStore(
  reducers,
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSTION__ && window.REDUX_DEVTOOLS_EXTENSION__{}
)
