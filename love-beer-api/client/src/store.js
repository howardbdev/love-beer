import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import beers from './reducers/beers';
import beerFormData from './reducers/beerFormData';
import commentFormData from './reducers/commentFormData';
import beer from './reducers/beer';
import comments from './reducers/comments'

const reducers = combineReducers({
  beers,
  beerFormData,
  beer,
  commentFormData,
  comments
});
const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
)
