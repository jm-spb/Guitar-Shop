import { combineReducers } from 'redux';

import { filtersReducer } from './filters';
import { itemCardsReducer } from './itemCards';

export const rootReducer = combineReducers({
  filters: filtersReducer,
  itemCards: itemCardsReducer
});
