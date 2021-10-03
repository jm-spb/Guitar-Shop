import React from 'react';

import { priceDelimeter } from '../../priceDelimeter';

import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

export const CartItem = ({
  id,
  name,
  imageCartURL,
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
        <img src={imageCartURL} alt={name} />
      </div>
      <div className="item__content">
        <div className="item__info">
          <h3>{name}</h3>
        </div>

        <div className="item__wrapper">
          <div className="item__count">
            <button className="button button-outline button-circle " onClick={handleMinusItem}>
              <FaMinus className="item__count-minus" />
            </button>
            <b>{totalItemCount}</b>
            <button className="button button-outline button-circle " onClick={handlePlusItem}>
              <FaPlus className="item__count-plus" />
            </button>
          </div>

          <div className="item__price">
            <b>{priceDelimeter(totalItemPrice)} ₽</b>

            <div className="item__remove">
              <button className="button button-outline button-circle" onClick={handleRemoveClick}>
                <FaPlus className="item__count-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
