import React from 'react';

// import './App.scss';

import { SelectBar, ItemCard } from '../components';

export const HomePage = ({ items }) => {
  let cardsList = [];
  for (let item in items) {
    cardsList = cardsList.concat(items[item].map((obj) => <ItemCard key={obj.id} {...obj} />));
  }

  return (
    <React.Fragment>
      <div className="index-page__select-bar">
        <SelectBar
          categoriesItems={[ 'Все', 'Гитары', 'Бас-гитары', 'Усилители', 'Кабинеты', 'Микрофоны' ]}
          sortPopupItems={[ 'популярности', 'цене', 'алфавиту' ]}
        />
      </div>

      <main className="index-page__main main">
        <h2>Все товары</h2>
        <div className="main__content">{cardsList}</div>
      </main>
    </React.Fragment>
  );
};
