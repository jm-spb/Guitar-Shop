import React from 'react';
import PropTypes from 'prop-types';

export const Categories = ({ activeCategory, categoriesItems, onClickCategory }) => {
  const categoriesList =
    categoriesItems &&
    categoriesItems.map((obj, idx) => (
      <li
        key={`${obj.name}_${idx}`}
        className={activeCategory === obj.category ? 'select-bar__categories_active' : ''}
        onClick={() => onClickCategory(obj.category)}
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

Categories.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  categoriesItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickCategory: PropTypes.func
};

Categories.defaultProps = {
  activeCategory: 'db',
  categoriesItems: []
};
