import styles from "./banner-card";
import React, { FunctionComponent, ReactNode, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleProp,
  ViewStyle,
  Pressable,
  Alert,
} from "react-native";
import FastImage from "react-native-fast-image";
import BaseCard from "../BaseCard/BaseCard";
import { pxToDp } from "@/utils/system";
import Ripple from "react-native-material-ripple";
export enum CardStyle {
  PUBLISH_STYLE = 1, //发行
  HOTCOLLECTION_STYLE = 2, //热门合集
}
type BannerCardProps = {
  style?: StyleProp<ViewStyle>;
  data: any;
  cardStyle?: CardStyle;
  onTap?: () => void;
  borderRadius?: number;
};
const BannerCard: FunctionComponent<BannerCardProps> = (props) => {
  const { data, style, cardStyle, onTap, borderRadius = pxToDp(10) } = props;
  const renderPublish = () => (
    <Ripple onPress={onTap}>
    <BaseCard style={[{ borderRadius: borderRadius },{width:pxToDp(560)}]}>
        <FastImage
          style={[styles.publish_image, { borderRadius: borderRadius }]}
          resizeMode="cover"
          source={{ uri: data?.thumb }}
        />
        <Text>{data?.name}</Text>
      </BaseCard>
    </Ripple>
  );

  const renderHot = () => (
    <Ripple onPress={onTap}>
    <BaseCard style={[{ borderRadius: borderRadius },{padding:0,width:pxToDp(280)}]}>
      <View style={{ alignItems: "center" }}>
        <FastImage
          style={[styles.hot_image, { borderRadius: borderRadius }]}
          resizeMode="cover"
          source={{ uri: data?.thumb }}
        />
        <FastImage
          style={styles.hot_head}
          resizeMode="cover"
          source={{ uri: data?.head }}
        />
        <Text>{data?.name}</Text>
      </View>
    </BaseCard>
    </Ripple>
  );
  return cardStyle == CardStyle.PUBLISH_STYLE ? renderPublish() : renderHot();
};
export default BannerCard;
