export const actions = {
  SET_TEST_PRODUCTS: 'SET_TEST_PRODUCTS',
};

export const setTestProducts = data => ({
  type: actions.SET_TEST_PRODUCTS,
  data,
});