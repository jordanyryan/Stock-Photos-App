import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import photosReducer from './photos';
import modalsReducer from './modals';


const rootReducer = combineReducers({
  form: formReducer,
  photos: photosReducer,
  isOpen: modalsReducer
})

export default rootReducer;