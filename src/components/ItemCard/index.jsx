import React from 'react';
import PropTypes from 'prop-types';

import { FaStar } from 'react-icons/fa';

import priceDelimeter from '../../priceDelimeter';

import './ItemCard.scss';

const ItemCard = ({
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
          return <FaStar key={ratingValue} size={15} color={ratingValue <= rating ? '#ffc107' : ''} />;
        })}
      </div>

      <div className="item-card__modal">
        <button className="button button-modal" onClick={handleModalOn} type="button">
          <span>Описание</span>
        </button>
      </div>

      <div className="item-card__bottom">
        <div className="item-card__price">{`${priceDelimeter(price)} ₽`}</div>
        <button onClick={handleAddItem} className="button button-outline button-add" type="button">
          <span>Добавить</span>
          {addedCount !== 0 ? <i>{addedCount}</i> : ''}
        </button>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
  imageCartURL: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  addedCount: PropTypes.number,
  onAddItem: PropTypes.func,
  setActive: PropTypes.func
};

ItemCard.defaultProps = {
  addedCount: 0,
  onAddItem: () => {},
  setActive: () => {}
};

export default ItemCard;
