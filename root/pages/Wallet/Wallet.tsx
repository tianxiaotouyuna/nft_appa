import React, { FunctionComponent, useState } from "react";
import { View, Button, Platform, Alert } from "react-native";

import { useWalletConnect } from "@walletconnect/react-native-dapp";
import Ripple from "react-native-material-ripple";
import { Text } from "react-native-paper";

 const Wallet: FunctionComponent = () => {
  const connector = useWalletConnect(); // valid
  const [walletInfo, setwalletInfo] = useState();
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
        }} onPress={() => connector.connect()}><Text>Connect me</Text></Ripple>
    }
    else return (<Ripple style={{
      height: 100,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
    }} onPress={() => connector.killSession()}><Text>Kill Session</Text></Ripple>)
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f2f2f2",
        paddingHorizontal: 20,
        justifyContent: "space-between",
        paddingTop: 100,
      }}
    >
      {showButton()}

    </View>
  );
};

export default Wallet;