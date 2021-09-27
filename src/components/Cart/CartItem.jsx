import React from 'react';

import minus from '../../assets/icons/minus.svg';
import plus from '../../assets/icons/plus.svg';

export const CartItem = ({ name, imageURL }) => {
  return (
    <div className="item cart__item">
      <div className="item__img">
        <img src={imageURL} width={40} alt={name} />
      </div>
      <div className="item__info">
        <h3>{name}</h3>
      </div>
      <div className="item__count">
        <div className="button button-outline button-circle item__count_minus">
          <img src={minus} width={10} height={10} alt="minus" />
        </div>
        <b>2</b>
        <div className="button button-outline button-circle item__count_plus">
          <img src={plus} width={10} height={10} alt="plus" />
        </div>
      </div>
      <div className="item__price">
        <b>770 ₽</b>
      </div>
      <div className="item__remove">
        <div className="button button-outline button-circle">
          <img src={plus} width={10} height={10} alt="plus" />
        </div>
      </div>
    </div>
  );
};
