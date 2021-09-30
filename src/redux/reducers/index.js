import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import session from 'redux-persist/lib/storage/session';

import { cart } from './cart';
import { filters } from './filters';
import { itemCards } from './itemCards';

const persistConfig = {
  key: 'root',
  storage: session,
  whitelist: [ 'cart' ]
};

const rootReducer = combineReducers({
  filters,
  itemCards,
  cart
});

export default persistReducer(persistConfig, rootReducer);
