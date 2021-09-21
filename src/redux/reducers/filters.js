const initialState = {
  category: 'guitars',
  sortBy: 'rating',
  order: 'desc'
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload.sortBy,
        order: action.payload.order
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload
      };
    default:
      return state;
  }
};
