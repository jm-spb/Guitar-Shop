import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';

import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import EmptyCartPage from './pages/EmptyCartPage';

const App = () => (
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

export default App;
