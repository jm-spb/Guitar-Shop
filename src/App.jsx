import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';

import { Header } from './components/Header/Header';
import { HomePage, CartPage, EmptyCartPage } from './pages';

export const App = () => {
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
