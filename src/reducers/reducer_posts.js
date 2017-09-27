import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function posts(state = {}, action) {
  console.log('action', action);
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...posts,
        ..._.mapKeys(action.payload.data, 'id')
      };
  }
  return state;
}
