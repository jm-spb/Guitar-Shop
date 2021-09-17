import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ItemCard, SortPopUp, Categories, Loader } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchItems } from '../redux/actions/itemCards';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(({ itemCards }) => {
    return {
      items: itemCards.items
    };
  });
  const { category, sortBy, order } = useSelector(({ filters }) => filters);
  const isLoaded = useSelector(({ itemCards }) => itemCards.isLoaded);

  // если data - это объект (/db)
  const itemsAsObject = () => {
    let cardsList = [];
    for (let item in items) {
      cardsList = cardsList.concat(items[item].map((obj) => <ItemCard key={obj.id} {...obj} />));
    }
    return cardsList;
  };

  // если data  - это массив (/guitars)
  const itemsAsArray = () => items && items.map((item) => <ItemCard key={item.id} {...item} />);

  let cardsList = Array.isArray(items) ? itemsAsArray() : itemsAsObject();

  useEffect(
    () => {
      // в dispatch прокидывается асинхронный экшн fetchItems, который сначала выполняет запрос, а затем сохраняет результат в store
      // dispatch вызывается каждый раз когда меняем категорию
      dispatch(fetchItems(category, sortBy, order));
    },
    [ category, sortBy, order, dispatch ]
  );

  const onSelectCategory = (categoryType) => {
    dispatch(setCategory(categoryType));
  };

  const onSelectSortType = (sortType, orderType) => {
    dispatch(setSortBy(sortType, orderType));
  };

  return (
    <React.Fragment>
      <div className="index-page__select-bar">
        <div className="select-bar">
          <Categories
            onClickCategory={(categoryType) => onSelectCategory(categoryType)}
            categoriesItems={[
              { name: 'Гитары', category: 'guitars' },
              { name: 'Бас-гитары', category: 'bass' },
              { name: 'Усилители', category: 'amp' },
              { name: 'Кабинеты', category: 'cabinet' },
              { name: 'Микрофоны', category: 'mics' }
            ]}
            activeCategory={category}
          />
          <SortPopUp
            sortPopupItems={[
              { name: 'популярности', type: 'rating', order: 'desc' },
              { name: 'от дешёвых к дорогим', type: 'price', order: 'asc' },
              { name: 'от дорогих к дешёвым', type: 'price', order: 'desc' },
              { name: 'алфавиту (A-Z)', type: 'name', order: 'asc' },
              { name: 'алфавиту (Z-A)', type: 'name', order: 'desc' }
            ]}
            activeSortType={{ sortBy, order }}
            onClickSortType={(sortType, orderType) => onSelectSortType(sortType, orderType)}
          />
        </div>
      </div>

      <main className="index-page__main main">
        <h2>Все товары</h2>
        <div className="main__content">
          {isLoaded ? cardsList : Array(8).fill(0).map((_, idx) => <Loader key={idx} />)}
        </div>
      </main>
    </React.Fragment>
  );
};
