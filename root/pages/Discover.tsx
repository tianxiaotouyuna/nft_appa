import React, { FunctionComponent } from "react";
import { View, Button, Platform, Alert } from "react-native";

import { useWalletConnect } from "@walletconnect/react-native-dapp";
import WalletConnectProvider from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ripple from "react-native-material-ripple";
import { Text } from "react-native-paper";

export const Discover: FunctionComponent = () => {
  const connector = useWalletConnect(); // valid
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

      <Ripple
        style={{
          height: 100,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
        onPress={() => connector.connect()} 
      >
        <Text>Connect me</Text>
      </Ripple>
      </View>
  );
};
