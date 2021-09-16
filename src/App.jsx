import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.scss';

import { Header } from './components';
import { HomePage, CartPage, EmptyCartPage } from './pages';
import { fetchItems } from './redux/actions/itemCards';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(
    () => {
      // в dispatch прокидывается асинхронный экшн fetchItems, который сначала выполняет запрос, а затем сохраняет результат в store
      dispatch(fetchItems());
    },
    [ dispatch ]
  );

  return (
    <div className="index-page">
      <div className="index-page__content container">
        <div className="index-page__header">
          <Header />
        </div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/empty" component={EmptyCartPage} />
      </div>
    </div>
  );
};

// 'https://localhost:3001/?_order=desc&_sort-price'
