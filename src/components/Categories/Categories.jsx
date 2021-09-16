import React, { useState } from 'react';

export const Categories = ({ categoriesItems, onClickItem }) => {
  const [ activeCategotyItem, setActiveCategoryItem ] = useState(0);

  const onSelectItem = (idx) => {
    setActiveCategoryItem(idx);
    onClickItem(idx);
  };

  // categoriesItems && - Если categoriesItems === null, undefined; сайт не падает с ошибкой, не рендерится только SelectBar.
  const categoriesList =
    categoriesItems &&
    categoriesItems.map((name, idx) => (
      <li
        key={`${name}_${idx}`}
        className={activeCategotyItem === idx ? 'select-bar__categories_active' : ''}
        onClick={() => onSelectItem(idx)}
      >
        {name}
      </li>
    ));

  return (
    <div className="select-bar__categories">
      <ul>{categoriesList}</ul>
    </div>
  );
};
