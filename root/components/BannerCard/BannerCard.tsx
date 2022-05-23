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
import { UIELEMENTS } from "@/constants/index";
import { Navigate } from "@/utils/";
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
      <View style={[{ flexDirection: 'row', justifyContent: 'space-between',width:'100%'}]}>
            {data?.map((item: any, index: number) => (
              item_one(item,index)
            ))}
        </View>
  );
const item_one=(item:any,index:number)=>(

  <Ripple onPress={()=>Navigate.navigate('NtfDetail', {id:item?.id}) } rippleColor={UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE} rippleContainerBorderRadius={borderRadius}>
  <BaseCard style={[{ borderRadius: borderRadius },{width:pxToDp(326)}]}>
      <FastImage
        style={[styles.publish_image, { borderRadius: borderRadius }]}
        resizeMode="cover"
        source={{ uri: item?.imageUrl }}
      />
      <View style={{paddingTop:pxToDp(28),paddingBottom:pxToDp(22),paddingLeft:pxToDp(20),justifyContent:"space-between"}}>
      <Text style={{color:'#707A83',fontSize:pxToDp(20)}}>{item?.assetName}</Text>
      <Text style={{color:'#383838',fontSize:pxToDp(24),marginTop:pxToDp(8),fontWeight:'bold',width:pxToDp(194)}} numberOfLines={2}>{item?.collectionName}</Text>
      <Text style={{color:'#707A83',fontSize:pxToDp(20),marginTop:pxToDp(18)}}>价格</Text>
      <Text style={{color:'#383838',fontSize:pxToDp(24),marginTop:pxToDp(8),fontWeight:'bold'}}>{item?.salePrice}</Text>
        </View>
    </BaseCard>
  </Ripple>
)
  const renderHot = () => (
    <Ripple onPress={onTap} rippleColor={UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE}>
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
