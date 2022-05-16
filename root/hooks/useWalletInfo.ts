import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const useWalletInfo = () => {

    const dispatch = useDispatch();

    // 用户信息
    const { walletInfo } = useSelector((state: any) => ({ ...state}));
    const isLogin = !!walletInfo?.mobile;
  
    // 发送事件
    const sendReduxAction = (type: string, data?: any) => {
  dispatch({ type, payload: data });
    }

    return { sendReduxAction, walletInfo, isLogin }

}

export default useWalletInfo;
