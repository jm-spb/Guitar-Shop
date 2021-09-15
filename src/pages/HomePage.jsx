import React from 'react';
import { useSelector } from 'react-redux';

import { ItemCard, SortPopUp } from '../components';
import { Categories } from '../components';

export const HomePage = () => {
  const { items } = useSelector(({ itemCards, filters }) => {
    return {
      items: itemCards.items,
      filters: filters.sortBy
    };
  });

  let cardsList = [];

  for (let item in items) {
    cardsList = cardsList.concat(items[item].map((obj) => <ItemCard key={obj.id} {...obj} />));
  }

  return (
    <React.Fragment>
      <div className="index-page__select-bar">
        <div className="select-bar">
          <Categories categoriesItems={[ 'Все', 'Гитары', 'Бас-гитары', 'Усилители', 'Кабинеты', 'Микрофоны' ]} />
          <SortPopUp
            sortPopupItems={[
              { name: 'популярности', type: 'popular' },
              { name: 'цене', type: 'price' },
              { name: 'алфавиту', type: 'alphabet' }
            ]}
          />
          {/* <SelectBar
            categoriesItems={[ 'Все', 'Гитары', 'Бас-гитары', 'Усилители', 'Кабинеты', 'Микрофоны' ]}
            sortPopupItems={[
              { name: 'популярности', type: 'popular' },
              { name: 'цене', type: 'price' },
              { name: 'алфавиту', type: 'alphabet' }
            ]}
          /> */}
        </div>
      </div>

      <main className="index-page__main main">
        <h2>Все товары</h2>
        <div className="main__content">{cardsList}</div>
      </main>
    </React.Fragment>
  );
};
