export const ADD_EVENT = 'ADD_EVENT';

export function addDishes(newItem = {}) {
  return {
    type: ADD_EVENT,
    payload: newItem,
  };
}
