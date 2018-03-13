
import axios from 'axios';
import {FETCH_PHOTOS, TOGGLE_MODAL, AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE} from './types';
const PHOTOS_URL = "https://pixabay.com/api/";
const ROOT_URL = "http://localhost:3090";
const {REACT_APP_API_KEY} = process.env
console.log(process.env)

export function fetchPhotos(term) {
  const request = axios.get(`${PHOTOS_URL}?key=${REACT_APP_API_KEY}&q=${term}&image_type=photo&per_page=12`);

  return {
    type: FETCH_PHOTOS,
    payload: request
  };
}

export function toggleModal({isOpen, curModal}) {
  return {
    type: TOGGLE_MODAL,
    payload: {isOpen, curModal}
  }
}

export function signinUser({email, password}, callback) {

  return function(dispatch) {
    axios.post(`${ROOT_URL}/signin`, {email, password})
    .then( (response) => {
      dispatch({type: AUTH_USER}); //  - update state to indicate user is authenticated
      localStorage.setItem('token', response.data.token); //  - save JWT token
      callback() //  - redirect to protected route / or wherever else
    })
    .catch((err) => {
      dispatch(authError('Email/Password incorrect'));
    }); 
  }
}


export function signoutUser() {
  localStorage.removeItem('token');
  return {type: UNAUTH_USER}
}

export function signupUser({email, password, firstName, lastName}, callback) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, {email, password, firstName, lastName})
    .then( response => {
      dispatch({type: AUTH_USER});
      localStorage.setItem('token', response.data.token);
      callback()
    })
    .catch(({response}) => {
      dispatch(authError(response.data.error))
    })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}


export function fetchMessage() {
  const request = axios.get(ROOT_URL, {
      headers: {authorization: localStorage.getItem('token')}
    })

    return {
      type: FETCH_MESSAGE,
      payload: request
    }
}
