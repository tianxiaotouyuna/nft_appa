import {LoginIn, LoginOut, LoginError} from 'constants/WalletStatusType';

const loginIn = () => ({type: LoginIn});
const loginOut = () => ({type: LoginOut});
const loginError = () => ({type: LoginError});

export {loginIn, loginOut, loginError};