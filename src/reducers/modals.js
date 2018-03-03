import {TOGGLE_SIGNIN_MODAL} from '../actions/types';

export default function(state={}, action) {
  switch(action.type) {
    case TOGGLE_MODAL:
      return {isOpen: !action.payload}
    default:
      return state;
  }
}