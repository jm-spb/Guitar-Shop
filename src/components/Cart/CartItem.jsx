import React from 'react';

import minus from '../../assets/icons/minus.svg';
import plus from '../../assets/icons/plus.svg';

export const CartItem = ({
  id,
  name,
  imageURL,
  totalItemPrice,
  totalItemCount,
  onClickRemoveItem,
  onClickPlusItem,
  onClickMinusItem
}) => {
  const handleRemoveClick = () => {
    onClickRemoveItem(id);
  };

  const handlePlusItem = () => {
    onClickPlusItem(id);
  };

  const handleMinusItem = () => {
    onClickMinusItem(id);
  };

  return (
    <div className="item cart__item">
      <div className="item__img">
        <img src={imageURL} width={40} alt={name} />
      </div>
      <div className="item__info">
        <h3>{name}</h3>
      </div>
      <div className="item__count">
        <button className="button button-outline button-circle item__count_minus" onClick={handleMinusItem}>
          <img src={minus} width={10} height={10} alt="minus" />
        </button>
        <b>{totalItemCount}</b>
        <button className="button button-outline button-circle item__count_plus" onClick={handlePlusItem}>
          <img src={plus} width={10} height={10} alt="plus" />
        </button>
      </div>
      <div className="item__price">
        <b>{totalItemPrice} ₽</b>
      </div>
      <div className="item__remove">
        <button className="button button-outline button-circle" onClick={handleRemoveClick}>
          <img src={plus} width={10} height={10} alt="plus" />
        </button>
      </div>
    </div>
  );
};
