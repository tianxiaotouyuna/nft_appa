import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import WalletLoginReducer from '@/reducers/WalletLoginReducer';

const configureStore = (state:any) => {
  return createStore(
    WalletLoginReducer,
    state,
    compose(applyMiddleware(thunk)),
  );
};

const store = configureStore();

export default store;


