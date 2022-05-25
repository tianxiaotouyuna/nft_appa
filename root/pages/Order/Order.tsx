import React, { FunctionComponent, useState } from "react";
import { Alert, View } from "react-native";

import { useWalletConnect } from "@walletconnect/react-native-dapp";
import Ripple from "react-native-material-ripple";
import { Text } from "react-native-paper";
import {UIELEMENTS } from "@/constants/index";
import styles from "@/styles/pages/order/order";
import useInitScreen from "@/hooks/useInitScreen";
import { useDispatch } from "react-redux";
import { walletActions } from "@/action/walletActions";
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
  const buy=()=>{
    Alert.alert('2')

      connector.signPersonalMessage([]).then(async function (result: any) {
          console.log("成功：" + JSON.stringify(result));
          Alert.alert('1')
        })
        .catch(function (error: any) {
          console.log("失败：" + error);
          Alert.alert('2')
        });
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
        }} onPress={()=>{}}><Text>Connect mea</Text></Ripple>
    }
    else  { 

      return (<Ripple rippleColor={UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE} style={{
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }} onPress={() => buy()}><Text>购买1</Text></Ripple>)
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