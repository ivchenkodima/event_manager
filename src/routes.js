import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Main from './containers/Main';
import List from './containers/pages/List';
import AddItem from './containers/pages/AddItem';
import NotFound from './containers/pages/NotFound';

export const routes = (
  <div>
    <Route path='/' component={Main}>
      <IndexRoute path='/admin' component={List} />
      <Route path='/add' component={AddItem} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
);
