import "react-native-gesture-handler";
import WalletConnectProvider, { RenderQrcodeModalProps, useWalletConnect } from "@walletconnect/react-native-dapp";

import React, { FunctionComponent } from "react";
import { Alert, Platform, View } from "react-native";
import { Nav } from "@/routes/Nav";
const { default: AsyncStorage } = require('@react-native-async-storage/async-storage');

 const WalletProvider: any = (options:any) => {

  Alert.alert(JSON.stringify(options))
  return(
    <WalletConnectProvider
    bridge="https://bridge.walletconnect.org"
    clientMeta={{
      description: "Connect with WalletConnect",
      url: "https://walletconnect.org",
      icons: ["https://walletconnect.org/walletconnect-logo.png"],
      name: "Nft_APP",
    }}
    redirectUrl={
      Platform.OS === "web" ? "window.location.origin" : "nftxm://"
    }
    storageOptions={{
      asyncStorage: AsyncStorage,
    }}
  >
      <Nav/>
  </WalletConnectProvider>
  )

}

export default WalletProvider
