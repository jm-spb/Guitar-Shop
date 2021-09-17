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
  const { category, sortBy } = useSelector(({ filters }) => filters);
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
      dispatch(fetchItems(category, sortBy));
    },
    [ category, sortBy ]
  );

  const onSelectCategory = (categoryType) => {
    dispatch(setCategory(categoryType));
  };

  const onSelectSortType = (sortType) => {
    dispatch(setSortBy(sortType));
  };

  return (
    <React.Fragment>
      <div className="index-page__select-bar">
        <div className="select-bar">
          <Categories
            onClickCategory={(categoryType) => onSelectCategory(categoryType)}
            categoriesItems={[
              { name: 'Все', category: 'db' },
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
              { name: 'популярности', type: 'popular' },
              { name: 'цене', type: 'price' },
              { name: 'алфавиту', type: 'name' }
            ]}
            activeSortType={sortBy}
            onClickSortType={(sortType) => onSelectSortType(sortType)}
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
