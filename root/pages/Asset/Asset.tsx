import React, { FunctionComponent, useState } from "react";
import { View, Button, Platform, Alert, ImageStore } from "react-native";

import { useWalletConnect } from "@walletconnect/react-native-dapp";
import Ripple from "react-native-material-ripple";
import { Text } from "react-native-paper";
import useWalletInfo from "@/hooks/useWalletInfo";
import { ReduxToken, UIELEMENTS } from "@/constants/index";
import { useSelector } from "react-redux";
import useInitScreen from "@/hooks/useInitScreen";
import NtfButton from "@/components/NtfButton/NtfButton";
import { pxToDp } from "@/utils/system";
import { Image } from "react-native-animatable";
import styles from "@/styles/pages/asset/asset";
import AssetBtnWraps from "@/pageranges/AssetBtnWraps/AssetBtnWraps";
const Wallet: FunctionComponent = () => {
  const connector = useWalletConnect(); // valid
  const { walletInfo, sendReduxAction } = useWalletInfo();
  // const { walletInfo} = useSelector((state: any) => ({ ...state?.user }));
  const connectThis = () => {
    sendReduxAction(ReduxToken.SET_WalletINFO, {
      walletInfo: { address: "0x11133323331" },
    });
    connector.connect();
  };
  useInitScreen({ navigationOptions: { title: "资产" } });
  const showButton = () => {
    if (!connector.connected) {
      /**
       *  Connect! 🎉
       */
      return (
        <Ripple
          style={{
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
          }}
          onPress={() => connectThis()}
        >
          <Text>Connect me</Text>
        </Ripple>
      );
    } else {
      return (
        <Ripple
          rippleColor={UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE}
          style={{
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
          }}
          onPress={() => connector.killSession()}
        >
          <Text>Kill Session</Text>
          <Text>{walletInfo?.address}</Text>
        </Ripple>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.btn_icon} source={require("@/resources/fang.png")} />
      <Text style={styles.btn_text}>您还没有链接钱包</Text>
      <AssetBtnWraps
        onPress_1={connectThis}
        onPress_2={ connectThis}
        onPress_3={ connectThis}
      />
    </View>
  );
};

export default Wallet;
