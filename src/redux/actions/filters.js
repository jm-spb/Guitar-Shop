export const setSortBy = (sortBy, order) => ({
  type: 'SET_SORT_BY',
  payload: { sortBy, order }
});

export const setCategory = (catIndex) => ({
  type: 'SET_CATEGORY',
  payload: catIndex
});
