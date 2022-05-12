import "react-native-gesture-handler";
import WalletConnectProvider from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";

import React from "react";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootRoutes } from "./routes/RootRoutes";

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
        Platform.OS === "web" ? "window.location.origin" : "nftxm://"
      }
      storageOptions={{
        asyncStorage: AsyncStorage,
      }}
    >
      <SafeAreaView style={{ flex: 1 }} edges={["bottom", "left", "right"]}>
        <RootRoutes/>
      </SafeAreaView>
    </WalletConnectProvider>
  );
};

export default App;
