import React from 'react';
import PropTypes from 'prop-types';

import { priceDelimeter } from '../../priceDelimeter';

import { FaStar } from 'react-icons/fa';

import './ItemCard.scss';

export const ItemCard = ({
  id,
  name,
  discription,
  imageURL,
  imageCartURL,
  price,
  rating,
  onAddItem,
  addedCount,
  setActive
}) => {
  const handleAddItem = () => {
    const obj = {
      id,
      name,
      imageCartURL,
      price
    };
    onAddItem(obj);
  };

  const handleModalOn = () => {
    setActive({ scrollY: window.scrollY, show: true, name, discription, imageURL, price });

    // block body scroll on modal open
    document.body.setAttribute(
      'style',
      `position: fixed; top: -${window.scrollY}px; left: 0; right: 0; background-color: rgba(28, 42, 57, 1);`
    );
  };

  return (
    <div className="main__item-card item-card">
      <div className="item-card__image">
        <img src={imageURL} alt={name} />
      </div>

      <div className="item-card__title">
        <h4>{name}</h4>
      </div>

      <div className="item-card__rating">
        {[ ...Array(10) ].map((_, i) => {
          const ratingValue = i + 1;
          return <FaStar key={i + ratingValue} size={15} color={ratingValue <= rating ? '#ffc107' : ''} />;
        })}
      </div>

      <div className="item-card__modal">
        <button className="button button-modal" onClick={handleModalOn}>
          <span>Описание</span>
        </button>
      </div>

      <div className="item-card__bottom">
        <div className="item-card__price">{`${priceDelimeter(price)} ₽`}</div>
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
