import axios from 'axios';
import { SET_CARDS, SET_LOADED } from '../actionTypes';

export const setItemCards = (items) => ({
  type: SET_CARDS,
  payload: items
});

export const setLoaded = (payload) => ({
  type: SET_LOADED,
  payload
});

export const fetchItems = (category, sortBy, order) => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get(`/${category}?_sort=${sortBy}&_order=${order}`).then(({ data }) => {
    dispatch(setItemCards(data));
  });
};
