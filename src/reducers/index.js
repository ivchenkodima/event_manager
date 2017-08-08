import { combineReducers } from 'redux';

import events from './events';

const reducers = {
  events,
};

const reducer = combineReducers({
  reducers,
});

export default reducer;
