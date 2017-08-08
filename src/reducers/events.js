import { handleAction } from 'redux-actions';
import { API_HOST } from '../config';
import { invoke } from './api';

export const fetchEvents = () => invoke({
  endpoint: `${API_HOST}/`,
  method: 'GET',
  headers: {
    'content-type': 'application/json',
  },
  types: ['events/FETCH_EVENTS_REQUEST', {
    type: 'events/FETCH_EVENTS_SUCCESS',
    payload: (action, state, res) => res.json(),
  }, 'users/FETCH_USER_LIST_FAILURE'],
});

export const postEvents = body => invoke({
  endpoint: `${API_HOST}/`,
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  types: [
    'events/POST_EVENTS_REQUEST',
    'events/POST_EVENTS_SUCCESS',
    'events/POST_USER_LIST_FAILURE',
  ],
  body,
});

export const deleteEvents = () => invoke({
  endpoint: `${API_HOST}/`,
  method: 'DELETE',
  headers: {
    'content-type': 'application/json',
  },
  types: [
    'events/DELETE_EVENTS_REQUEST',
    'events/DELETE_EVENTS_SUCCESS',
    'events/DELETE_USER_LIST_FAILURE'
  ],
});

export default handleAction(
  'events/FETCH_EVENTS_SUCCESS',
  (state, action) => ({
    ...state,
    ...action.payload,
  }),
  []
);


