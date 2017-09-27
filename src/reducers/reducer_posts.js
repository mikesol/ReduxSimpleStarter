import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function posts(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...posts,
        ..._.mapKeys(map.action.payload, 'id')
      };
  }
  return state;
}
