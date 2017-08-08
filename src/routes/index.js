import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Main from '../containers/Main/index';
import List from '../containers/pages/List/index';
import AddItem from '../containers/pages/AddItem/index';
import NotFound from '../containers/pages/NotFound/index';

export const routes = (
  <div>
    <Route path='/' component={Main}>
      <IndexRoute path='/admin' component={List} />
      <Route path='/add' component={AddItem} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
);
export default routes;
