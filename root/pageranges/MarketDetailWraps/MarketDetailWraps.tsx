import React, { FunctionComponent, ReactNode, useState } from "react";
import {
  View,
} from "react-native";
import styles from "./marketdetail-style";
import NtfButton from "@/components/NtfButton/NtfButton";
import { pxToDp } from "@/utils/system";
import { walletActions } from "@/action/walletActions";
import { useDispatch } from "react-redux";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import { Image, Text } from "react-native-animatable";
type AssetBtnWrapsProps = {
  data?: any
};
const MarketDetailWraps: FunctionComponent<AssetBtnWrapsProps> = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const connector = useWalletConnect(); // valid
  const login = () => {
    dispatch(walletActions.connect(connector));
  };
  return (
    <View style={styles.container}>
      <Text style={{ color: '#383838', fontSize: pxToDp(32), fontWeight: 'bold' }}>{data?.assetName}</Text>
      <Text numberOfLines={3} style={{ width: pxToDp(750) }}>{data?.description}</Text>
      <View style={{ backgroundColor: '#F0F0F0', height: pxToDp(4), width: '100%', marginTop: pxToDp(40) }} />
      <View style={{ paddingTop: pxToDp(26) , paddingBottom: pxToDp(44) ,flexDirection: "row", alignItems: "center",flex:1,justifyContent:"space-between" }}>
        <View style={{ }}>
          <Text style={{ color: '#707A83', fontSize: pxToDp(24) }}>拥有者</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: '#3352DB' }}>123</Text>
            <Image style={styles.arrow} source={require('@/resources/return.png')} />
          </View>
        </View>

        <View>
          <Text style={{ color: '#707A83', fontSize: pxToDp(24) }}>发行方</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: '#3352DB', fontSize: pxToDp(28) ,width:pxToDp(199)}} numberOfLines={1}>{data?.creatorAddress}</Text>
            <Image style={styles.arrow} source={require('@/resources/return.png')} />
          </View>
        </View>
      </View>
      <Text style={{ color: '#383838', fontSize: pxToDp(32), fontWeight: 'bold' }}>基础信息</Text>

      <View>
          <Text style={{ color: '#707A83', fontSize: pxToDp(24) }}>合约地址</Text>
            <Text style={{ color: '#383838', fontSize: pxToDp(28) }} numberOfLines={1}>{data?.creatorAddress}</Text>
        </View>


    </View>
  );
};
//https://www.apifox.cn/apidoc/shared-82b71f6c-7299-46df-ac3b-41f48031a9ed/api-20735620
export default MarketDetailWraps;
