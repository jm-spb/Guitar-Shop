import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({ activeCategory, categoriesItems, onClickCategory }) => {
  const categoriesList =
    categoriesItems &&
    categoriesItems.map((obj) => (
      <li
        key={`${obj.name}`}
        className={activeCategory === obj.category ? 'select-bar__categories_active' : ''}
      >
        <button
          onClick={() => onClickCategory(obj.category)}
          onKeyDown={() => onClickCategory(obj.category)}
          type="button"
        >
          {obj.name}
        </button>
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
  categoriesItems: PropTypes.instanceOf(Array).isRequired,
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = {
  onClickCategory: () => {},
};

export default Categories;
