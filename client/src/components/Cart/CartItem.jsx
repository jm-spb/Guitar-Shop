import React from 'react';
import PropTypes from 'prop-types';

import { FaMinus, FaPlus } from 'react-icons/fa';

import priceDelimeter from '../../priceDelimeter';

const CartItem = ({
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
            <button className="button button-outline button-circle " onClick={handleMinusItem} type="button">
              <FaMinus className="item__count-minus" />
            </button>
            <b>{totalItemCount}</b>
            <button className="button button-outline button-circle " onClick={handlePlusItem} type="button">
              <FaPlus className="item__count-plus" />
            </button>
          </div>

          <div className="item__price">
            <b>{priceDelimeter(totalItemPrice)} ₽</b>

            <div className="item__remove">
              <button className="button button-outline button-circle" onClick={handleRemoveClick} type="button">
                <FaPlus className="item__count-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageCartURL: PropTypes.string.isRequired,
  totalItemPrice: PropTypes.number.isRequired,
  totalItemCount: PropTypes.number.isRequired,
  onClickRemoveItem: PropTypes.func,
  onClickPlusItem: PropTypes.func,
  onClickMinusItem: PropTypes.func
};

CartItem.defaultProps = {
  onClickRemoveItem: () => {},
  onClickPlusItem: () => {},
  onClickMinusItem: () => {}
};

export default CartItem;
