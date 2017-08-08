import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(apiMiddleware, thunk)));
