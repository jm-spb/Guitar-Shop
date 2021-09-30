import React from 'react';
import PropTypes from 'prop-types';

import { FaStar } from 'react-icons/fa';

import './ItemCard.scss';

export const ItemCard = ({ id, name, imageURL, price, rating, onAddItem, addedCount }) => {
  const handleAddItem = () => {
    const obj = {
      id,
      name,
      imageURL,
      price
    };
    onAddItem(obj);
  };

  return (
    <div className="main__item-card item-card">
      <div className="item-card__image">
        <img src={imageURL} alt={name} />
      </div>

      <h4 className="item-card__title">{name}</h4>
      <div className="item-card__rating">
        {[ ...Array(10) ].map((_, i) => {
          const ratingValue = i + 1;
          return (
            <FaStar key={i + ratingValue} className="star" size={15} color={ratingValue <= rating ? 'ffc107' : ''} />
          );
        })}
      </div>

      <div className="item-card__bottom">
        <div className="item-card__price">{`${price} ₽`}</div>
        <button onClick={handleAddItem} className="button button-outline button-add">
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </button>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  name: PropTypes.string,
  imageURL: PropTypes.string.isRequired,
  price: PropTypes.number,
  rating: PropTypes.number,
  onAddItem: PropTypes.func,
  addedCount: PropTypes.number
};

ItemCard.defaultProps = {
  name: 'Наименование товара',
  price: 0,
  rating: 0
};
