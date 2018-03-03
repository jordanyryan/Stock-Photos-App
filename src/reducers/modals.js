import {TOGGLE_MODAL} from '../actions/types';

export default function(state={isOpen: false, curModal: null}, action) {
  switch(action.type) {
    case TOGGLE_MODAL:
      console.log(action.payload)
      return action.payload.isOpen === true ? {isOpen: false, curModal: null} : {isOpen: true, curModal: action.payload.curModal}
    default:
      return state;
  }
}