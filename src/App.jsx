import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import './App.scss';

import { Header } from './components';
import { HomePage, CartPage, EmptyCartPage } from './pages';
import { setItemCards } from './redux/actions/itemCards';

export const App = () => {
  // dispatch в App - запрос выполняется один раз
  // dispatch в Home - запрос выполняется каждый раз при рендере Home
  const dispatch = useDispatch();

  useEffect(
    () => {
      axios
        .get(
          'https://gist.githubusercontent.com/jm-spb/06e13e0d892ebfe70e143ab67c3604f0/raw/ca103408a0f7b1adea900891732b72fc8d191752/guitar-shop.json'
        )
        .then(({ data }) => dispatch(setItemCards(data)));
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
