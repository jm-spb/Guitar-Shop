import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ItemCard, SortPopUp, Categories, Loader } from '../components';
import { fetchItems } from '../redux/actions/itemCards';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(({ itemCards }) => {
    return {
      items: itemCards.items
    };
  });

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
  const itemsAsArray = () => items.map((item) => <ItemCard key={item.id} {...item} />);

  let cardsList = Array.isArray(items) ? itemsAsArray() : itemsAsObject();

  useEffect(
    () => {
      // в dispatch прокидывается асинхронный экшн fetchItems, который сначала выполняет запрос, а затем сохраняет результат в store
      dispatch(fetchItems());
    },
    [ dispatch ]
  );

  return (
    <React.Fragment>
      <div className="index-page__select-bar">
        <div className="select-bar">
          <Categories
            onClickItem={(category) => dispatch(fetchItems(category))}
            categoriesItems={[
              { name: 'Все', category: 'db' },
              { name: 'Гитары', category: 'guitars' },
              { name: 'Бас-гитары', category: 'bass' },
              { name: 'Усилители', category: 'amp' },
              { name: 'Кабинеты', category: 'cabinet' },
              { name: 'Микрофоны', category: 'mics' }
            ]}
          />
          <SortPopUp
            sortPopupItems={[
              { name: 'популярности', type: 'popular' },
              { name: 'цене', type: 'price' },
              { name: 'алфавиту', type: 'alphabet' }
            ]}
          />
        </div>
      </div>

      <main className="index-page__main main">
        <h2>Все товары</h2>
        <div className="main__content">
          {isLoaded ? cardsList : Array(6).fill(0).map((_, idx) => <Loader key={idx} />)}
        </div>
      </main>
    </React.Fragment>
  );
};
