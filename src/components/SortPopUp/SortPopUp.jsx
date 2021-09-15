import React, { useState, useEffect, useRef } from 'react';

import triangle from '../../assets/icons/triangle.png';

export const SortPopUp = ({ sortPopupItems }) => {
  const [ activePopupItem, setActivePopupItem ] = useState(0);
  const [ visiblePopup, setVisiblePopup ] = useState(false);

  const sortRef = useRef();

  useEffect(() => {
    document.body.addEventListener('click', hadleOutsideClick);
  }, []);

  // hide Popup on click outside "select-bar__sort sort"
  const hadleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) setVisiblePopup(false);
  };

  const onSelectItem = (idx) => {
    setActivePopupItem(idx);
    setVisiblePopup(false);
  };

  const sortPopupList =
    sortPopupItems &&
    sortPopupItems.map((obj, idx) => (
      <li
        key={`${obj.type}_${idx}`}
        className={activePopupItem === idx ? 'sort__popup_active' : ''}
        onClick={() => onSelectItem(idx)}
      >
        {obj.name}
      </li>
    ));

  const activeLabel = sortPopupItems[activePopupItem].name;

  // toggle & filter Popup
  const togglePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  return (
    <div ref={sortRef} className="select-bar__sort sort">
      <div className="sort__label">
        <img className={visiblePopup ? 'rotated' : ''} src={triangle} width={10} height={10} alt="triangle" />
        <b>Сортировка&nbsp;по:</b>
        <span onClick={togglePopup}>{activeLabel}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>{sortPopupList}</ul>
        </div>
      )}
    </div>
  );
};
