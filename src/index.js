import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router'

import registerServiceWorker from './registerServiceWorker';
import regeneratorRuntime from 'babel-runtime/regenerator';

import { store } from './store';
import routes  from './routes';
import './index.css';

console.log('store', store);

if (!regeneratorRuntime.default) {
  regeneratorRuntime.default = regeneratorRuntime;
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
