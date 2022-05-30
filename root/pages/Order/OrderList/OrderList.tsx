import React, { FunctionComponent, useState } from "react";
import { View, Button, Platform, Alert, ImageStore, Pressable, Image, Text } from "react-native";

import { useWalletConnect } from "@walletconnect/react-native-dapp";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/styles/pages/asset/loginout";
import { walletActions } from "@/action/walletActions";
import { wallet } from "@/reducers/walletReducer";
import NtfButton from "@/components/NtfButton/NtfButton";
import { pxToDp } from "@/utils/system";
import useNavigationOptions from "@/hooks/useNavigationOptions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UIELEMENTS } from "@/constants/";
const OrderList: FunctionComponent = () => {
    const dispatch = useDispatch();
    const connector = useWalletConnect(); // valid
    const login = () => {
      dispatch(walletActions.connect(connector));
    };
  return (
    <View style={[styles.container, { marginBottom: 100 + useSafeAreaInsets().bottom },{alignItems:"center",justifyContent:"center"}]}>
      <View style={{justifyContent:"center",alignItems:"center"}}>

    <Image
      style={styles.btn_icon}
      source={require("@/resources/nolinkedwallet.png")}
    />
    {connector.connected?
          <Text style={styles.btn_text}>您还没有相应订单</Text>
        :
        
      <NtfButton
        heigh={pxToDp(100)}
        width={pxToDp(400)}
        onPress={ login}
        backgroundColor={UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE}
        textColor='white'
        text={"链接钱包"}
        borderRadius={pxToDp(12)}
        style={{marginTop:pxToDp(160),marginHorizontal:pxToDp(160)}}
      />
    }
      </View>
    </View>
  );
};

export default OrderList;

