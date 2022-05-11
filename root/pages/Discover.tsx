import React, { Component } from "react";
import { View, Button, Platform } from "react-native";

import { useWalletConnect, withWalletConnect } from '@walletconnect/react-native-dapp';
export const Discover = (props: any) => {
  const connector = useWalletConnect(); // valid
  const renderView=()=>{
    if (!connector.connected) {
      /**
       *  Connect! 🎉
       */
      return <Button title="Connect" onPress={() => connector.connect()} />;
    }
    return <Button title="Kill Session" onPress={() => connector.killSession()} />;
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f2f2f2",
        paddingHorizontal: 20,
        justifyContent: "space-between",
        paddingTop:100
      }}
    >
      {renderView()}
    </View>
  );
};
