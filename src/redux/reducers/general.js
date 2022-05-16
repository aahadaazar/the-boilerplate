import { actions } from '../actions/general';

const initialState = {
  testProducts:[]
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, data }) => {
  switch (type) {
    case actions.SET_TEST_PRODUCTS:
      return { ...state, testProducts: data };
    default:
      return state;
  }
};
