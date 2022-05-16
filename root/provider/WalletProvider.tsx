import "react-native-gesture-handler";
import WalletConnectProvider, { RenderQrcodeModalProps, useWalletConnect } from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { FunctionComponent } from "react";
import { Alert, Platform, View } from "react-native";
import { RootRoutes } from "@/routes/RootRoutes";

 const WalletProvider: any = () => {
const connector = useWalletConnect(); // valid

   const showCallBack=(props:RenderQrcodeModalProps)=>{
    //  Alert.alert(JSON.stringify(props))
     
   }
  return(
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
    // renderQrcodeModal={(props:RenderQrcodeModalProps)=>{useDispatch({'type':'loginIn'})}}
    // renderQrcodeModal={props=>{showCallBack(props)}}
  >
      <RootRoutes/>
  </WalletConnectProvider>
  )

}

export default WalletProvider
