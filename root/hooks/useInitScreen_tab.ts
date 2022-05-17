import { StackNavigationOptions } from "@react-navigation/stack";
import { Alert, StatusBarProps } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { ReduxToken } from "../constants";

  const useInitScreen_tab = ( ) => {
    const { options } = useSelector((state: any) => ({ ...state}));
    const dispatch = useDispatch();
    // 发送事件
    const sendReduxAction_tabNav = (type: string, data?: any) => {
      dispatch({ type, payload: data });
        }

    return {  sendReduxAction_tabNav,options }

}

export default useInitScreen_tab;