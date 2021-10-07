import { SET_CARDS, SET_LOADED, SET_ERROR_MSG } from '../actionTypes';

const initialState = {
  items: [],
  isLoaded: false,
  isError: false
};

const itemCards = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
        isError: false
      };

    case SET_LOADED:
      return { ...state, isLoaded: action.payload };

    case SET_ERROR_MSG:
      return { ...state, isLoaded: true, isError: action.payload };

    default:
      return state;
  }
};

export default itemCards;
