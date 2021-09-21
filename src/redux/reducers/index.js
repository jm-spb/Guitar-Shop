import { combineReducers } from 'redux';

import { cart } from './cart';
import { filters } from './filters';
import { itemCards } from './itemCards';

export const rootReducer = combineReducers({
  filters,
  itemCards,
  cart
});
