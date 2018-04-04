import {FETCH_USER, LIKE_PHOTO} from '../actions/types';

export default function(state={}, action) {
  switch(action.type) {
    case FETCH_USER:
      return {...action.payload.data};
    case LIKE_PHOTO:
      return {...action.payload.data};
    default:
      return state
  }

}