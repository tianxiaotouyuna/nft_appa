import React, { FunctionComponent, useState } from "react";
import { View, Button, Platform, Alert } from "react-native";

import { useWalletConnect } from "@walletconnect/react-native-dapp";
import Ripple from "react-native-material-ripple";
import { Text } from "react-native-paper";
import useWalletInfo from "@/hooks/useWalletInfo";
import { ReduxToken, UIELEMENTS } from "@/constants/index";
import { useSelector } from "react-redux";
import styles from "@/styles/pages/order/order";
const Order: FunctionComponent = () => {
  const connector = useWalletConnect(); // valid
    const {  walletInfo,sendReduxAction} = useWalletInfo();
    // const { walletInfo} = useSelector((state: any) => ({ ...state?.user }));
  const connectThis=()=>{
      sendReduxAction(ReduxToken.SET_WalletINFO, { walletInfo:{'address':'0x11133323331'} });
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
        }} onPress={()=>connectThis()}><Text>Connect mea</Text></Ripple>
    }
    else  { 

      return (<Ripple rippleColor={UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE} style={{
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
      {showButton()}

    </View>
  );
};

export default Order;