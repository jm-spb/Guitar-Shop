import { ADD_ITEM_CART, CLEAR_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM } from '../actionTypes';

const initialState = {
  itemsAdded: {},
  totalPrice: 0,
  totalCount: 0
};

// Сумма по каждой подгруппе товаров (то, что сгруппировано по id)
const getTotalItemsPrice = (arr) => arr.reduce((pre, cur) => pre + cur.price, 0);

// Общая сумма по всем товарам в корзине
const getTotalPrice = (obj) => {
  // создаём единый массив из всех значений в itemsAdded. Его длина - количество добавленных товаров
  const items = Object.values(obj).map((objInArr) => objInArr.items);
  const allItemsArray = [].concat(...items);
  const totalPrice = getTotalItemsPrice(allItemsArray);

  return totalPrice;
};

// Общее количество товаров в корзине
const getTotalCount = (obj) => {
  const items = Object.values(obj).map((objInArr) => objInArr.items);
  const allItemsArray = [].concat(...items);

  return allItemsArray.length;
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_CART: {
      /* в currentItems содержится актуальное значение добавленных объектов.
      1) проверь объект itemsAdded по ключу action.payload.id.
      2) если такого ключа нет, то запиши в массив currentItems объект из action.payload. 
      3) если такой ключ есть, скопируй все существующие объекты из массива items и добавь новый объект из action.payload
      4) Массив currentItems будет в качестве ключа передан в items
      */
      // Immer library - вместо тернарника
      const currentItems = !state.itemsAdded[action.payload.id]
        ? [ action.payload ]
        : [ ...state.itemsAdded[action.payload.id].items, action.payload ];

      // Объекты в newItem сгруппированы по id. Если в itemsAdded нет объекта с выбранным id, то добавляем новый объект по новому id. Если в itemsAdded уже есть объект с выбранным id, то добавляем в этот объект ещё один товар. Плюс добавляем сумму всех товаров по каждому id.
      const newItems = {
        ...state.itemsAdded,
        [action.payload.id]: {
          items: currentItems,
          totalItemPrice: getTotalItemsPrice(currentItems)
        }
      };

      return {
        itemsAdded: newItems,
        totalCount: getTotalCount(newItems),
        totalPrice: getTotalPrice(newItems)
      };
    }

    case REMOVE_CART_ITEM: {
      const newItems = JSON.parse(JSON.stringify(state.itemsAdded));
      const totalPrice = state.totalPrice - newItems[action.payload].totalItemPrice;
      const totalCount = state.totalCount - newItems[action.payload].items.length;

      delete newItems[action.payload];

      return {
        itemsAdded: newItems,
        totalPrice,
        totalCount
      };
    }

    case PLUS_CART_ITEM: {
      const newObjItems = [ ...state.itemsAdded[action.payload].items, state.itemsAdded[action.payload].items[0] ];

      const newItems = {
        ...state.itemsAdded,
        [action.payload]: {
          items: newObjItems,
          totalItemPrice: getTotalItemsPrice(newObjItems)
        }
      };

      return {
        itemsAdded: newItems,
        totalPrice: getTotalPrice(newItems),
        totalCount: getTotalCount(newItems)
      };
    }

    case MINUS_CART_ITEM: {
      const oldItems = state.itemsAdded[action.payload].items;
      const newObjItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems;

      const newItems = {
        ...state.itemsAdded,
        [action.payload]: {
          items: newObjItems,
          totalItemPrice: getTotalItemsPrice(newObjItems)
        }
      };

      return {
        itemsAdded: newItems,
        totalPrice: getTotalPrice(newItems),
        totalCount: getTotalCount(newItems)
      };
    }

    case CLEAR_CART:
      return {
        itemsAdded: {},
        totalPrice: 0,
        totalCount: 0
      };

    default:
      return state;
  }
};

export default cart;
