const initialState = {
  itemsAdded: {},
  totalPrice: 0,
  totalCount: 0
};

export const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM_CART': {
      // в newItem содержится актуальное значение добавленных объектов. Object.keys(newItem).length - получаем актуальное количество ключей
      const newItem = {
        ...state.itemsAdded,
        [action.payload.id]: !state.itemsAdded[action.payload.id]
          ? [ action.payload ]
          : [ ...state.itemsAdded[action.payload.id], action.payload ]
      };
      // создаём единый массив из всех значений в itemsAdded. Его длина - количество добавленных товаров
      const allItemsArray = [].concat(...Object.values(newItem));
      const totalPrice = allItemsArray.reduce((pre, cur) => pre + cur.price, 0);

      return {
        ...state,
        itemsAdded: newItem,
        totalCount: allItemsArray.length,
        totalPrice
      };
    }

    default:
      return state;
  }
};
