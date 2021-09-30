import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import persistReducer from './reducers';

// composeEnhancers - для корректной работы ReduxDevTools и функций посредников (middleware)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// applyMiddleware - взять все функции посредники, и использовать их при каждом action
export const store = createStore(persistReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);
