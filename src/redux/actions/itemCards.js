import { SET_CARDS, SET_LOADED, SET_ERROR_MSG } from '../actionTypes';

export const setItemCards = (items) => ({
  type: SET_CARDS,
  payload: items
});

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload
});

export const setErrorMsg = (payload) => ({
  type: SET_ERROR_MSG,
  payload
});
