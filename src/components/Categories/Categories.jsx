import React, { useState } from 'react';

export const Categories = ({ categoriesItems, onClickItem }) => {
  const [ activeCategotyItem, setActiveCategoryItem ] = useState('db');

  const onSelectItem = (category) => {
    setActiveCategoryItem(category);
    onClickItem(category);
  };

  // categoriesItems && - Если categoriesItems === null, undefined; сайт не падает с ошибкой, не рендерится только SelectBar.
  const categoriesList =
    categoriesItems &&
    categoriesItems.map((obj, idx) => (
      <li
        key={`${obj.name}_${idx}`}
        className={activeCategotyItem === obj.category ? 'select-bar__categories_active' : ''}
        onClick={() => onSelectItem(obj.category)}
      >
        {obj.name}
      </li>
    ));

  return (
    <div className="select-bar__categories">
      <ul>{categoriesList}</ul>
    </div>
  );
};
