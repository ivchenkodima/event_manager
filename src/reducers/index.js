import { combineReducers } from 'redux';

import add from './add';

const reducers = {
  add,
};


const reducer = combineReducers(reducers);

export default reducer;