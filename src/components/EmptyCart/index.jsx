import React from 'react';
import { Link } from 'react-router-dom';

import './EmptyCart.scss';

import emptyCard from '../../assets/img/empty_cart.webp';

const EmptyCart = () => (
  <div className="cart cart__empty">
    <h2>Корзина пустая</h2>
    <p>
      Вероятней всего, вы ещё не выбрали ни одного товара.<br />
      Для того, чтобы добавить товары в корзину, перейдите на главную страницу.
    </p>
    <img src={emptyCard} alt="Empty cart" />
    <Link to="/">
      <button className="button button-black" type="button">
        <span>Вернуться назад</span>
      </button>
    </Link>
  </div>
);

export default EmptyCart;
