import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./root/navigation/AppNavigation";
import WalletConnectProvider from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";

import React from "react";
import { Platform } from "react-native";

const App = () => {
  return (
    <WalletConnectProvider
      bridge="https://bridge.walletconnect.org"
      clientMeta={{
        description: "Connect with WalletConnect",
        url: "https://walletconnect.org",
        icons: ["https://walletconnect.org/walletconnect-logo.png"],
        name: "WalletConnect",
      }}
      redirectUrl={
        Platform.OS === "web" ? "window.location.origin" : "uftDappsxm://"
      }
      storageOptions={{
        asyncStorage: AsyncStorage,
      }}
    >
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </WalletConnectProvider>
  );
};

export default App;
