import { SET_CARDS, SET_LOADED } from '../actionTypes';

const initialState = {
  items: [],
  isLoaded: false
};

const itemCards = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      };

    case SET_LOADED:
      return { ...state, isLoaded: action.payload };

    default:
      return state;
  }
};

export default itemCards;
