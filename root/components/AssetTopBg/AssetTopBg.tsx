import { pxToDp, pxToSp } from "@/utils/system";
import React, { FunctionComponent, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  Alert,
  ImageBackground,
} from "react-native";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import { useSelector } from "react-redux";
import styles from "./asset-style";
const AssetTopBg: FunctionComponent = (props) => {
  const wallet = useSelector((state: any) => state);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.headImage}
        source={require("@/resources/bg.png")}
      >
        <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"space-between"}}>
          <Text style={{ color: "white" ,fontSize:pxToSp(28)}}>钱包</Text>
          <Image
            style={styles.arrow}
            source={require("@/resources/return_3.png")}
          />
        </View>
        <Text style={{ color: "white" ,fontSize:pxToSp(52)}}>{wallet?.peerMeta?.name}</Text>

        <Text style={{ color: "white",fontSize:pxToSp(28) }} numberOfLines={1} ellipsizeMode={'middle'}>地址：{wallet?.accounts?.[0]}</Text>

      </ImageBackground>
    </View>
  );
};

export default AssetTopBg;
