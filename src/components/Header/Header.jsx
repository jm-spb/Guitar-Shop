import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Header.scss';

import logo from '../../assets/icons/GS logo.png';
import cart from '../../assets/icons/cart.png';

export const Header = () => {
  const { totalPrice, totalCount } = useSelector(({ cart }) => ({
    totalPrice: cart.totalPrice,
    totalCount: cart.totalCount
  }));
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/">
          <div className="header__logo">
            <div className="header__title">
              <img src={logo} width={40} height={40} alt="logo" />
              <h1>GUITAR SHOP</h1>
            </div>
            <div className="header__discription">
              <i>Продажа гитар и музыкального оборудования</i>
            </div>
          </div>
        </Link>

        <div className="header__cart">
          <Link to="/cart">
            <button className="button button-cart">
              <span>{totalPrice} ₽</span>
              <div className="button__delimiter" />
              <img src={cart} alt="cart" />
              <span>{totalCount}</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};
