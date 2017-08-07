import { ADD_EVENT } from '../actions';

export default function addReducers (state = [], action) {

  switch (action.type) {
    case ADD_EVENT:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }

}