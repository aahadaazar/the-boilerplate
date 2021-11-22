import { actions } from '../actions/general';

const initialState = {
  testKey:''
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, data }) => {
  switch (type) {
    case actions.SET_TEST_KEY:
      return { ...state, testKey: data };
    default:
      return state;
  }
};
