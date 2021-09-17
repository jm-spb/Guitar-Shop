import axios from 'axios';
// Проблема: вынести get-запрос из App.jsx в отдельный экшн. useDispatch использовать внутри экшена нельзя, только внутри компонента. Также dispatch нужно выполнить только после выполнения get-запроса
// Решение: использовать middleware - redux-thunk.
// fetchItems возвращает другую функцию, которая является асинхронным экшеном.
//  fetchItems решает, если возвращаемая функция является функцией (как в данном случае), то превратить его в экшн и выполнить. Если возвращаемая функция является простым объектом - выполнить его и пройти дальше
// Результат работы fetchItems - получение товаров и их сохранение в store
export const fetchItems = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get(`http://localhost:3002/${category}?_sort=${sortBy}&_order=asc`).then(({ data }) => {
    dispatch(setItemCards(data));
  });
};

export const setItemCards = (items) => ({
  type: 'SET_CARDS',
  payload: items
});

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload
});
