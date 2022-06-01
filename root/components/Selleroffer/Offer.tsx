import React, { FunctionComponent, ReactNode, useEffect, useState } from "react";
import FastImage from "react-native-fast-image";
import {
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  Text,
  Image,
  Alert,
} from "react-native";
import styles from "./styles";
import { Navigate, Storage } from "@/utils/index";
import NtfButton from "../NtfButton/NtfButton";
import { pxToDp, pxToSp } from "@/utils/system";
import { CacheKeys } from "@/constants/index";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import OfferCard, { PriceCardStyle } from "./SellerofferCard/OfferCard";
import { ScrollView } from "react-native-gesture-handler";
type PopProps = {
  style?: StyleProp<ViewStyle>;
  priceCardStyle?: PriceCardStyle;
  onBuy?: () => void;
  cancle_press?: () => void;
  data?: any
};

const Offer: FunctionComponent<PopProps> = (props) => {
  const { style, data, onBuy, cancle_press, priceCardStyle } = props;
  const connector = useWalletConnect(); // valid
  const [wallet, setwallet] = useState();
  console.log(JSON.stringify("priceCardStyle===" + JSON.stringify(data)));

  const item_one=(item:any, index:number)=>{
    return(
      <View style={[styles.modalContent, style]}  >
    <OfferCard style={{ marginTop: pxToDp(30) }} onPress={onBuy} priceCardStyle={priceCardStyle} data={{item}} />
  </View>
    )
  }
  const renderLoginOut = () => {
    return (
      <ScrollView style={[styles.pageContent, style]}  >
      <View style={{ flexDirection: "row", width: '100%', alignItems: "center", paddingLeft: -pxToDp(24), justifyContent: "space-between" }}>
        <Text style={{ fontSize: pxToSp(32), fontWeight: "bold", marginLeft: pxToDp(10) }}>{priceCardStyle == PriceCardStyle.SELLER_STYLE ? '卖家定价' : '买家出价'}</Text>
        <Pressable onPress={cancle_press} style={{ width: pxToDp(88), height: pxToDp(88), alignItems: "center", justifyContent: "center" }}>
          <Image
            style={styles.arrow}
            source={require("@/resources/closure.png")}
          />
        </Pressable>
      </View>
        {data?.map((item: any, index: number) => (
          item_one(item, index)
        ))}
      
      </ScrollView>
    )
  }
  return (
    renderLoginOut()
  );
};

export default Offer;
