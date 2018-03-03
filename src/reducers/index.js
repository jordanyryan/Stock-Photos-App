import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import photosReducer from './photos';
import modalsReducer from './modals';
import authReducer from './auth_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  photos: photosReducer,
  isOpen: modalsReducer,
  auth: authReducer
})

export default rootReducer;