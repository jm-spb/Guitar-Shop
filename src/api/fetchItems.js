import axios from 'axios';

import { setLoaded, setItemCards, setErrorMsg } from '../redux/actions/itemCards';

const fetchItems = (category, sortBy, order) => (dispatch) => {
  axios
    .get(`/${category}?_sort=${sortBy}&_order=${order}`)
    .finally(dispatch(setLoaded(false)))
    .then(({ data }) => {
      dispatch(setItemCards(data));
    })
    .catch(() => dispatch(setErrorMsg(true)));
};

export default fetchItems;
