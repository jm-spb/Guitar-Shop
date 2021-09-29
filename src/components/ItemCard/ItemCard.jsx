import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ItemCard.scss';

export const ItemCard = ({ id, name, imageURL, price, caseOptions, onAddItem, addedCount }) => {
  const caseOptionsNames = [ 'без кейса', 'с кейсом' ];
  const [ caseSelection, setCaseSelection ] = useState(caseOptions[0]);

  const onCaseSelect = (idx) => {
    setCaseSelection(idx);
  };

  const handleAddItem = () => {
    const obj = {
      id,
      name,
      imageURL,
      price,
      caseOption: caseOptionsNames[caseSelection]
    };
    onAddItem(obj);
  };

  return (
    <div className="main__item-card item-card">
      <div className="item-card__image">
        <img src={imageURL} alt={name} />
      </div>

      <h4 className="item-card__title">{name}</h4>
      <div className="item-card__selector">
        <ul>
          {caseOptionsNames.map((el, idx) => (
            <li
              key={el}
              onClick={() => onCaseSelect(idx)}
              className={classNames({
                'item-card__selector_active': caseSelection === idx,
                'item-card__selector_disabled': !caseOptions.includes(idx)
              })}
            >
              {el}
            </li>
          ))}
        </ul>
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
  caseOptions: PropTypes.arrayOf(PropTypes.number),
  onAddItem: PropTypes.func,
  addedCount: PropTypes.number
};

ItemCard.defaultProps = {
  name: 'Наименование товара',
  price: 0,
  caseOptions: []
};
