import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'left sidepull' },
    { id: uuid(), name: 'right crimp' },
    { id: uuid(), name: 'bump right to jug' },
    { id: uuid(), name: 'match' },
  ],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload)
      }
    default:
      return state;
  }
}
