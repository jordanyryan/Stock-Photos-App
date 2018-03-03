import axios from 'axios';
import {FETCH_PHOTOS, TOGGLE_MODAL} from './types';

const PHOTOS_URL = "https://api.unsplash.com/"

export function fetchPhotos(term) {
  const request = axios.get(`${PHOTOS_URL}search/photos?query=${term}&per_page=12&client_id=00625b03316ea0eb73689e6875cf45a301e46f8aaefe5bf68f1243c794955de6`);

  return {
    type: FETCH_PHOTOS,
    payload: request
  };
}

export function toggleModal(isOpen) {
  return {
    type: TOGGLE_MODAL,
    payload: isOpen
  }
}

