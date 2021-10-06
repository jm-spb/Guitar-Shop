import { SET_CATEGORY, SET_SORT_BY } from '../actionTypes';

const initialState = {
  category: 'guitars',
  sortBy: 'rating',
  order: 'desc'
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload.sortBy,
        order: action.payload.order
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload
      };
    default:
      return state;
  }
};

export default filters;
