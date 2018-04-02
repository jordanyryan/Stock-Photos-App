import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import photosReducer from './photos';
import modalsReducer from './modals';
import authReducer from './auth_reducer';
import userReducer from './user';

const rootReducer = combineReducers({
  form: formReducer,
  photos: photosReducer,
  modal: modalsReducer,
  auth: authReducer,
  user: userReducer
})

export default rootReducer;