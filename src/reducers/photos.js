import {FETCH_PHOTOS} from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_PHOTOS:
      return action.payload.data.hits.map(photo => {
        return {url: photo.webformatURL}
      })
    default:
      return state;
  }
}

