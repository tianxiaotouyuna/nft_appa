import React, { FunctionComponent, useEffect, useState } from "react";
import { View, Button, Platform, Alert } from "react-native";

import { useWalletConnect } from "@walletconnect/react-native-dapp";
import Ripple from "react-native-material-ripple";
import { Searchbar, Text } from "react-native-paper";
import useWalletInfo from "@/hooks/useWalletInfo";
import { ReduxToken, UIELEMENTS } from "@/constants/index";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/styles/pages/market/market";
import useInitScreen from "@/hooks/useInitScreen";
import { Navigate } from "@/utils/index";
import useInitScreen_tab from "@/hooks/useInitScreen_tab";
const Market: FunctionComponent = () => {


  const [inputValue, setinputValue] = useState('');
  const onChangeSearch = (query: string) => {

    setinputValue(query)
  }

  useEffect(() => {
    const { sendReduxAction_tabNav } = useInitScreen_tab();
    sendReduxAction_tabNav(ReduxToken.SET_TABNAVCHANGE, {
      navigationOptions: {
        title: '市场',
        headerTitleAlign: 'left'
      },
      statusBar: {
        backgroundColor: "transparent",
        barStyle: "light-content"
      }})
}, [])

const connector = useWalletConnect(); // valid
const { walletInfo, sendReduxAction } = useWalletInfo();

const connectThis = () => {
  sendReduxAction(ReduxToken.SET_WalletINFO, { walletInfo: { 'address': '0x11133323331' } });
  connector.connect()
}
const showButton = () => {
  if (!connector.connected) {
    /**
     *  Connect! 🎉
     */
    return <Ripple
      style={{
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }} onPress={() => connectThis()}><Text>Connect mea</Text></Ripple>
  }
  else {

    return (<Ripple style={{
      height: 100,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
    }} onPress={() => connector.killSession()}><Text>Kill Session</Text><Text>{walletInfo?.address}</Text></Ripple>)
  }
}

return (
  <View
    style={styles.container}
  >
    <Searchbar
      placeholder="搜索"
      onChangeText={(query) => { onChangeSearch(query) }}
      onEndEditing={() => { Navigate.navigate('Search', {}) }}
      value={inputValue}
      icon={require('@/resources/home/Search.png')}
      style={styles.search_wraps}
      inputStyle={styles.search_input}
      selectionColor={UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE}
    />
    {showButton()}

  </View>
);
};

export default Market;

function payload(SET_TABNAVCHANGE: string, payload: any, arg2: { title: string; headerTitleAlign: string; }) {
  throw new Error("Function not implemented.");
}
