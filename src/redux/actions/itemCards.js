import { SET_CARDS, SET_LOADED } from '../actionTypes';

export const setItemCards = (items) => ({
  type: SET_CARDS,
  payload: items
});

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload
});
