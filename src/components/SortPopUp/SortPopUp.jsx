import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import triangle from '../../assets/icons/triangle.png';

export const SortPopUp = ({ sortPopupItems, activeSortType, onClickSortType }) => {
  const [ visiblePopup, setVisiblePopup ] = useState(false);

  const sortRef = useRef();

  useEffect(() => {
    document.body.addEventListener('click', hadleOutsideClick);
  }, []);

  // hide Popup on click outside "select-bar__sort sort"
  const hadleOutsideClick = (e) => {
    // composedPath - for Firefox
    const path = e.path || (e.composedPath && e.composedPath());
    if (!path.includes(sortRef.current)) setVisiblePopup(false);
  };

  const onSelectItem = (sortType, order) => {
    onClickSortType(sortType, order);
    setVisiblePopup(false);
  };

  const sortPopupList =
    sortPopupItems &&
    sortPopupItems.map((obj, idx) => (
      <li
        key={`${obj.type}_${idx}`}
        className={activeSortType.sortBy === obj.type && activeSortType.order === obj.order ? 'sort__popup_active' : ''}
        onClick={() => onSelectItem(obj.type, obj.order)}
      >
        {obj.name}
      </li>
    ));

  const activeLabel = sortPopupItems.find((obj) => obj.type === activeSortType.sortBy).name;

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

// sortPopupItems, activeSortType, onClickSortType

SortPopUp.propTypes = {
  sortPopupItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  activeSortType: PropTypes.object,
  onClickSortType: PropTypes.func
};

SortPopUp.defaultProps = {
  sortPopupItems: [],
  activeSortType: {}
};
