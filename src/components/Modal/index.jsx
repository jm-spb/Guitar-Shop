import React from 'react';
import PropTypes from 'prop-types';

import './Modal.scss';

import priceDelimeter from '../../priceDelimeter';

const Modal = ({ scrollY, active, setActive, imageURL, name, discription, price }) => {
  const handleModalOff = () => {
    // enable body scroll on modal close
    document.body.setAttribute('style', '');
    window.scrollTo(0, scrollY);

    setActive(false);
  };
  return (
    <div
      className={active ? 'modal modal_active' : 'modal'}
      onClick={handleModalOff}
      onKeyDown={handleModalOff}
      role="button"
      tabIndex={0}
    >
      <div
        className="modal__card"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="button"
        tabIndex={0}
      >
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
          <span onClick={handleModalOff} onKeyDown={handleModalOff} role="button" tabIndex={0}>
            Закрыть
          </span>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  scrollY: PropTypes.number,
  active: PropTypes.bool,
  name: PropTypes.string,
  discription: PropTypes.string,
  imageURL: PropTypes.string,
  price: PropTypes.number,
  setActive: PropTypes.func
};

Modal.defaultProps = {
  scrollY: 0,
  active: false,
  name: '',
  discription: '',
  imageURL: '',
  price: 0,

  setActive: () => {}
};

export default Modal;
