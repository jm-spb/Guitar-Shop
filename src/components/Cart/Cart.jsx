import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './Cart.scss';

import { CartItem } from './CartItem';
import { EmptyCart } from '../EmptyCart/EmptyCart';

import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../../redux/actions/cart';

import cart from '../../assets/icons/cart.png';
import trash from '../../assets/icons/trash.png';
import go_back from '../../assets/icons/go_back.png';

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
            <h2 className="cart__title">
              <img src={cart} width={40} height={40} alt="cart" />Корзина
            </h2>
            <div className="cart__clear" onClick={onClearCart}>
              <img src={trash} width={25} height={25} alt="trash" />
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
                  <img src={go_back} width={20} height={20} alt="go back" />

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
