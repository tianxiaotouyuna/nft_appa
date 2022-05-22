import React, { FunctionComponent, useState } from "react";
import { View } from "react-native";

import { useWalletConnect } from "@walletconnect/react-native-dapp";
import Ripple from "react-native-material-ripple";
import { Text } from "react-native-paper";
import {UIELEMENTS } from "@/constants/index";
import styles from "@/styles/pages/order/order";
import useInitScreen from "@/hooks/useInitScreen";
const Order: FunctionComponent = () => {

  useInitScreen({
    navigationOptions: {
      title:'订单',
      headerTitleAlign: "left",
    },
    statusBar: {
      backgroundColor: "transparent",
      barStyle: "light-content",
    },
  });

  const connector = useWalletConnect(); // valid
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
        }} onPress={()=>{}}><Text>Connect mea</Text></Ripple>
    }
    else  { 

      return (<Ripple rippleColor={UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE} style={{
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }} onPress={() => connector.killSession()}><Text>Kill Session</Text></Ripple>)
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