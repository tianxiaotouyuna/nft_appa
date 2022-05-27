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
type PopProps = {
  style?: StyleProp<ViewStyle>;
  priceCardStyle?: PriceCardStyle;
  onBuy?: () => void;
  cancle_press?: () => void;
  data?:any
};

const Offer: FunctionComponent<PopProps> = (props) => {
  const { style, data, onBuy, cancle_press,priceCardStyle } = props;
  const connector = useWalletConnect(); // valid
  const [wallet, setwallet] = useState();

  const renderLoginOut = () => {
    return (

      <View style={[styles.modalContent, style]}>
      <View style={{ flexDirection: "row", width: '100%', alignItems: "center",paddingLeft:-pxToDp(24) ,justifyContent:"space-between"}}>
        <Text style={{ fontSize: pxToSp(32) ,fontWeight:"bold",marginLeft:pxToDp(10)}}>{priceCardStyle==PriceCardStyle.SELLER_STYLE?'卖家定价':'买家出价'}</Text>
       <Pressable onPress={cancle_press}>
        <Image
            style={styles.arrow}
        source={require("@/resources/closure.png")}
        />
       </Pressable>
      </View>
        <OfferCard style={{marginTop:pxToDp(30)}} onPress={onBuy} priceCardStyle={priceCardStyle} />
      </View>
    )
  }
  return (
    renderLoginOut()
  );
};

export default Offer;
