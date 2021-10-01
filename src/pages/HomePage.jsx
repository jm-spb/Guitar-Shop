import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './HomePage.scss';

import { ItemCard } from '../components/ItemCard/ItemCard';
import { SortPopUp } from '../components/SortPopUp/SortPopUp';
import { Categories } from '../components/Categories/Categories';
import { Loader } from '../components/ItemCard/Loader';
import { Modal } from '../components/Modal/Modal';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchItems } from '../redux/actions/itemCards';
import { addItemToCart } from '../redux/actions/cart';

export const HomePage = () => {
  const [ modalActive, setModalActive ] = useState({
    scrollY: 0,
    show: false,
    imageURL: '',
    name: '',
    discription: '',
    price: 0
  });

  const dispatch = useDispatch();

  const { items, isLoaded } = useSelector(({ itemCards }) => itemCards);
  const { category, sortBy, order } = useSelector(({ filters }) => filters);
  const { itemsAdded } = useSelector(({ cart }) => cart);

  const handleAddItem = (obj) => {
    dispatch(addItemToCart(obj));
  };

  const cardsList =
    items &&
    items.map((item) => (
      <ItemCard
        onAddItem={handleAddItem}
        key={item.id}
        addedCount={itemsAdded[item.id] && itemsAdded[item.id].items.length}
        setActive={setModalActive}
        {...item}
      />
    ));

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
              { name: 'Микрофоны', category: 'mics' },
              { name: 'Наушники', category: 'headphones' }
            ]}
            activeCategory={category}
          />
          <SortPopUp
            sortPopupItems={[
              { name: 'рейтингу', type: 'rating', order: 'desc' },
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

        <Modal
          scrollY={modalActive.scrollY}
          active={modalActive}
          setActive={setModalActive}
          imageURL={modalActive.imageURL}
          name={modalActive.name}
          discription={modalActive.discription}
          price={modalActive.price}
        />
      </main>
    </React.Fragment>
  );
};
