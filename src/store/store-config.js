import {createStore, combineReducers} from 'redux';
import authReducer from './reducer/auth/reducer-auth';

const reducers = combineReducers({
  authData: authReducer,
});

const storeConfig = () => {
  return createStore(reducers);
};

export default storeConfig;
