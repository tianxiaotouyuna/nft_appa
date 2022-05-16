import {legacy_createStore as createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import user from '@/reducers/user';

const configureStore = (state:any) => {
  return createStore(
    user,
    state,
    compose(applyMiddleware(thunk)),
  );
};

const store = configureStore();

export default store;



