import {
  FETCH_POSTS,
  FETCH_POST,
  DELETE_POST
} from '../actions';
import _ from 'lodash';

export default function posts(state = {}, action) {
  console.log('reducer posts called', action);
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        ..._.mapKeys(action.payload.data, 'id')
      };
    case FETCH_POST:
      return {
        ...state,
        [action.payload.data.id]: action.payload.data
      };
    case DELETE_POST:
      let copy = Object.assign({}, state);
      delete copy[action.payload];
      return copy;
    }
  return state;
}
