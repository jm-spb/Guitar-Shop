const initialState = {
  items: [],
  isLoaded: false
};

export const itemCardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CARDS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      };

    case 'SET_LOADED':
      return { ...state, isLoaded: action.payload };

    default:
      return state;
  }
};
