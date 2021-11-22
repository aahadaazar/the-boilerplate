import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';
import general from './general';

// combining multiple reducers to create one rootReducer
// eslint-disable-next-line import/no-anonymous-default-export
export default history => combineReducers({
  general,
  // router: connectRouter(history),
});
