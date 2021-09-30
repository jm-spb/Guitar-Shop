import React from 'react';

import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

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
        <img src={imageURL} height={100} alt={name} />
      </div>
      <div className="item__info">
        <h3>{name}</h3>
      </div>
      <div className="item__count">
        <button className="button button-outline button-circle item__count_minus" onClick={handleMinusItem}>
          <FaMinus />
        </button>
        <b>{totalItemCount}</b>
        <button className="button button-outline button-circle item__count_plus" onClick={handlePlusItem}>
          <FaPlus />
        </button>
      </div>
      <div className="item__price">
        <b>{totalItemPrice} ₽</b>
      </div>
      <div className="item__remove">
        <button className="button button-outline button-circle" onClick={handleRemoveClick}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};
