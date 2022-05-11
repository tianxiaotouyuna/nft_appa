import React, { FunctionComponent } from "react";
import { View, Button, Platform, Alert } from "react-native";

import { useWalletConnect } from "@walletconnect/react-native-dapp";
import WalletConnectProvider from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
        <Button title="Connect" onPress={() => connector.connect()} />
      </View>
  );
};
