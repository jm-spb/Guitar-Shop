import axios from 'axios';

import { setLoaded, setItemCards } from '../redux/actions/itemCards';

const fetchItems = (category, sortBy, order) => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get(`/${category}?_sort=${sortBy}&_order=${order}`).then(({ data }) => {
    dispatch(setItemCards(data));
  });
};

export default fetchItems;
