export const actions = {
  SET_TEST_KEY: 'SET_TEST_KEY',
};

export const setTestKey = data => ({
  type: actions.SET_TEST_KEY,
  data,
});