import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const ItemCard = ({ name, imageURL, price, caseOptions }) => {
  const caseOptionsNames = [ 'без кейса', 'с кейсом' ];
  const [ caseSelection, setCaseSelection ] = useState(caseOptions[0]);

  const onCaseSelect = (idx) => {
    setCaseSelection(idx);
  };

  return (
    <div className="main__item-card item-card">
      <img className="item-card__image" width={100} height={250} src={imageURL} alt={name} />
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
        <div className="button button-outline button-add">
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  name: PropTypes.string,
  imageURL: PropTypes.string.isRequired,
  price: PropTypes.number,
  caseOptions: PropTypes.arrayOf(PropTypes.number)
};

ItemCard.defaultProps = {
  name: 'Наименование товара',
  price: 0,
  caseOptions: []
};
