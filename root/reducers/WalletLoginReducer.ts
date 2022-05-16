import {combineReducers} from 'redux';
import {LoginIn, LoginOut, LoginError} from '@/constants/WalletStatusType';
import { Alert } from 'react-native';

// 原始默认state
const defaultState = {
  walletInfo: {}
};

function walletCallBack(state = defaultState, action:any) {
  Alert.alert("1")

  switch (action.type) {
    case LoginIn:
      return {...state, walletInfo:state.walletInfo};
    case LoginOut:
      return {...state, walletInfo: {}};
    case LoginError:
      return {...state, count: {}};
    default:
      return state;
  }
}

export default combineReducers({
  walletCallBack
});


