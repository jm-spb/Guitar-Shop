const initialState = {
  items: [],
  isLoaded: false
};

export const itemCardsReducer = (state = initialState, action) => {
  if (action.type === 'SET_CARDS') {
    return {
      ...state,
      items: action.payload,
      isLoaded: true
    };
  }
  return state;
};
