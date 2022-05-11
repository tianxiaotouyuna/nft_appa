import React, { Component } from "react";
import { View, Text, Platform } from "react-native";

import { useWalletConnect, withWalletConnect } from '@walletconnect/react-native-dapp';
export const Discover = (props: any) => {
  const connector = useWalletConnect(); // valid
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "red",
        paddingHorizontal: 20,
        justifyContent: "space-between",
        paddingTop:100
      }}
    >
    </View>
  );
};
