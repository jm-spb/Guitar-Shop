import React from 'react';

import './Modal.scss';

import { priceDelimeter } from '../../priceDelimeter';

export const Modal = ({ scrollY, active, setActive, imageURL, name, discription, price }) => {
  const handleModalOff = () => {
    // enable body scroll on modal close
    document.body.setAttribute('style', '');
    window.scrollTo(0, scrollY);

    setActive(false);
  };
  return (
    <div className={active.show ? 'modal modal_active' : 'modal'} onClick={handleModalOff}>
      <div className="modal__card" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <div className="modal__image">
            <img src={imageURL} alt="name" />
          </div>

          <div className="modal__content">
            <h1>{name}</h1>
            <h2>{`${priceDelimeter(price)} ₽`}</h2>
          </div>
        </div>

        <div className="modal__discription">
          <h4>Описание:</h4>
          <p>{discription}</p>
        </div>

        <div className="modal__close">
          <span onClick={handleModalOff}>Закрыть</span>
        </div>
      </div>
    </div>
  );
};
