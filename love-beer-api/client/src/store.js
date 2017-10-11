import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import beers from './reducers/beers';
import beerFormData from './reducers/beerFormData';
import beer from './reducers/beer';

const reducers = combineReducers({
  beers,
  beerFormData,
  beer,
});
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)
