import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaCartArrowDown } from 'react-icons/fa';

import './Header.scss';

import priceDelimeter from '../../priceDelimeter';

import logo from '../../assets/icons/GS logo.png';

const Header = () => {
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
            <button className="button button-cart" type="button">
              <span>{priceDelimeter(totalPrice)} ₽</span>
              <div className="button__delimiter" />
              <FaCartArrowDown className="cart-icon" size={25} />
              <span>{totalCount}</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
