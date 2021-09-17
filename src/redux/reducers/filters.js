const initialState = {
  category: 'guitars',
  sortBy: 'rating',
  order: 'desc'
};

export const filtersReducer = (state = initialState, action) => {
  if (action.type === 'SET_SORT_BY') {
    return {
      ...state,
      sortBy: action.payload.sortBy,
      order: action.payload.order
    };
  }
  if (action.type === 'SET_CATEGORY') {
    return {
      ...state,
      category: action.payload
    };
  }

  return state;
};
