import {FETCH_PHOTOS} from '../actions/types';
import _ from 'lodash';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_PHOTOS:
      const updated = _.map(action.payload.data.results, photo => {
        return {src: photo.urls.regular, width: photo.width, height: photo.height}
      })
      return updated;
    default:
      return state;
  }
}

