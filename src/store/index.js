import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

const createStoreWithMiddleware = composeWithDevTools(compose(applyMiddleware(
  thunkMiddleware,
  apiMiddleware,
)))(createStore);

export const store = createStoreWithMiddleware(rootReducer);
