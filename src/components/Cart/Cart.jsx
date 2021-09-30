import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './Cart.scss';

import { CartItem } from './CartItem';
import { EmptyCart } from '../EmptyCart/EmptyCart';

import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../../redux/actions/cart';

import { FaCartArrowDown } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';

export const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, itemsAdded } = useSelector(({ cart }) => cart);

  const groupItems = Object.keys(itemsAdded).map((key) => {
    return itemsAdded[key].items[0];
  });

  const onClearCart = () => {
    if (window.confirm('Вы действильно хотите удалить все товары из корзины?')) dispatch(clearCart());
  };

  const onRemoveItem = (id) => {
    if (window.confirm('Вы действильно хотите удалить выбранный товар из корзины?')) dispatch(removeCartItem(id));
  };

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  };

  const onClickOrder = () => {
    alert('Оплата прошла успешно!');
  };

  return (
    <React.Fragment>
      {totalCount ? (
        <div className="cart cart__page">
          <div className="cart__top">
            <div className="cart__title">
              <FaCartArrowDown className="cart__icon" size={30} /> <h2>Корзина</h2>
            </div>
            <div className="cart__clear" onClick={onClearCart}>
              <FaTrashAlt className="cart__clear-icon" size={30} />
              <span>Очистить корзину</span>
            </div>
          </div>
          <div className="cart__content">
            {groupItems.map((obj) => (
              <CartItem
                key={obj.id}
                id={obj.id}
                name={obj.name}
                imageURL={obj.imageURL}
                totalItemPrice={itemsAdded[obj.id].totalItemPrice}
                totalItemCount={itemsAdded[obj.id].items.length}
                onClickRemoveItem={onRemoveItem}
                onClickPlusItem={onPlusItem}
                onClickMinusItem={onMinusItem}
              />
            ))}
          </div>
          <div className="cart__bottom bottom">
            <div className="bottom__details">
              <span>
                Всего товаров: <b>{totalCount} шт.</b>
              </span>
              <span>
                Сумма заказа: <b>{totalPrice} ₽</b>
              </span>
            </div>
            <div className="bottom__buttons">
              <Link to="/">
                <button className="button button-outline button-go-back">
                  <FaArrowLeft className="button-go-back-icon" size={20} />
                  <span>Вернуться назад</span>
                </button>
              </Link>

              <button className="button button-pay" onClick={onClickOrder}>
                <span>Оплатить сейчас</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </React.Fragment>
  );
};
