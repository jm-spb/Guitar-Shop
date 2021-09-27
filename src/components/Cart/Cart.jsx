import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { CartItem } from './CartItem';

import './Cart.scss';

import cart from '../../assets/icons/cart.png';
import trash from '../../assets/icons/trash.png';

export const Cart = () => {
  const { totalPrice, totalCount, itemsAdded } = useSelector(({ cart }) => cart);

  const groupItems = Object.keys(itemsAdded).map((key) => {
    return itemsAdded[key][0];
  });

  return (
    <div className="cart cart__page">
      <div className="cart__top">
        <h2 className="cart__title">
          <img src={cart} alt="cart" />Корзина
        </h2>
        <div className="cart__clear">
          <img src={trash} alt="trash" />
          <span>Очистить корзину</span>
        </div>
      </div>
      <div className="cart__content">
        {groupItems.map((obj) => <CartItem key={obj.id} name={obj.name} imageURL={obj.imageURL} totalItemPrice={40} />)}
      </div>
      <div className="cart__bottom bottom">
        <div className="bottom__details">
          <span>
            Всего пицц: <b>{totalCount} шт.</b>
          </span>
          <span>
            Сумма заказа: <b>{totalPrice} ₽</b>
          </span>
        </div>
        <div className="bottom__buttons">
          <Link to="/">
            <button className="button button-outline button-add go-back-btn">
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 13L1 6.93015L6.86175 1"
                  stroke="#D3D3D3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Вернуться назад</span>
            </button>
          </Link>

          <button className="button pay-btn">
            <span>Оплатить сейчас</span>
          </button>
        </div>
      </div>
    </div>
  );
};
