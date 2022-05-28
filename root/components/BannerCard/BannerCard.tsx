import styles from "./banner-card";
import React, { FunctionComponent, ReactNode, useEffect, useState } from "react";
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
import { Navigate } from "@/utils/index";
import { Fade, Placeholder, PlaceholderLine, PlaceholderMedia, ShineOverlay } from "rn-placeholder";
export enum CardStyle {
  PUBLISH_STYLE = 1, //发行
  HOTCOLLECTION_STYLE = 2, //热门合集
  HOTNTF_STYLE = 3, //热门合集
}
type BannerCardProps = {
  style?: StyleProp<ViewStyle>;
  data: any;
  cardStyle?: CardStyle;
  onTap?: () => void;
  isFromMy?: boolean;
  borderRadius?: number;
};
const BannerCard: FunctionComponent<BannerCardProps> = (props) => {
  const { data, style, cardStyle, onTap, borderRadius = pxToDp(10),isFromMy } = props;
const [imageEnd, setimageEnd] = useState(true);
const [imageError, setimageError] = useState(false);
const renderHotNtf = () =>{
  console.log('================'+JSON.stringify(data))
 return (
    <View style={[{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }]}>
      {data?.map((item: any, index: number) => (
        item_one(item, index)
      ))}
    </View>
  );  
}
const pushCard=(item:any)=>{
  if(isFromMy)Navigate.navigate('NtfDetail', { item: item,isMyDetail: true})
  else Navigate.navigate('NtfDetail', { item: item })
}
  const item_one = (item: any, index: number) => (

    <Ripple onPress={()=>pushCard(item )} rippleColor={UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE} rippleContainerBorderRadius={borderRadius} key={`${index}`}>
      <BaseCard style={[{ borderRadius: borderRadius }, { width: pxToDp(326), paddingHorizontal: pxToDp(8) }]}>
      <FastImage
                style={imageEnd?[styles.publish_image, { borderRadius: borderRadius ,backgroundColor:'#EEEEEE'}]:[{width:0,height:0}]}
                resizeMode="cover"
                source={{ uri: item?.imageUrl }}
                onLoad={() => {
                  setimageEnd(true);
                }}
                // onError={()=>{
                //   setimageError(true);
                  
                // }}
                fallback={true}
              />
        {imageEnd ?
          (
            <>
              {/* <FastImage
                style={[styles.publish_image, { borderRadius: borderRadius ,backgroundColor:'#EEEEEE'}]}
                resizeMode="cover"
                source={{ uri: item?.imageUrl }}
              /> */}
              <View style={{ paddingTop: pxToDp(28), paddingBottom: pxToDp(22), paddingLeft: pxToDp(20), justifyContent: "space-between" }}>
                <Text style={{ color: '#707A83', fontSize: pxToDp(20) }}>{item?.assetName}</Text>
                <Text style={{ color: '#383838', fontSize: pxToDp(24), marginTop: pxToDp(8), fontWeight: 'bold', width: pxToDp(194) }} numberOfLines={2}>{item?.collectionName}</Text>
                <Text style={{ color: '#707A83', fontSize: pxToDp(20), marginTop: pxToDp(18) }}>价格</Text>
                <Text style={{ color: '#383838', fontSize: pxToDp(24), marginTop: pxToDp(8), fontWeight: 'bold' }}>{item?.salePrice}</Text>
              </View>
            </>
          ) :
          (
            <>
        <Placeholder Animation={ShineOverlay} >
              <PlaceholderMedia style={[styles.publish_image, { borderRadius: borderRadius }]} />
              <View style={{ paddingTop: pxToDp(28), paddingBottom: pxToDp(22), paddingLeft: pxToDp(12), justifyContent: "space-between" }}>
                <PlaceholderLine style={{ width: pxToDp(50) }} />
                <PlaceholderLine style={{ marginTop: pxToDp(8), width: pxToDp(194) }} />
                <PlaceholderLine style={{ marginTop: pxToDp(18), width: pxToDp(194) }} />
                <PlaceholderLine style={{ marginTop: pxToDp(8), width: pxToDp(194) }} />
              </View>
              </Placeholder>
            </>
          )
        }



      </BaseCard>
    </Ripple>
  )


  const renderPublish = () => (
    <BaseCard style={{ borderRadius: borderRadius }}>
      <FastImage
        style={[styles.publish_image, { borderRadius: borderRadius }]}
        resizeMode="cover"
        source={{ uri: data?.imageUrl }}
      />
      <Text>{data?.assetName}</Text>
    </BaseCard>
  );

  const renderHot = () => (
    <Ripple onPress={onTap} rippleColor={UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE}>
      <BaseCard style={[{ borderRadius: borderRadius }, { padding: 0, width: pxToDp(280) }]}>
        <View style={{ alignItems: "center" }}>
          <FastImage
            style={[styles.hot_image, { borderRadius: borderRadius }]}
            resizeMode="cover"
            source={{ uri: data?.thumb }}
          />
          <Text>{data?.name}</Text>
        </View>
      </BaseCard>
    </Ripple>
  );

  return cardStyle == CardStyle.PUBLISH_STYLE ? renderPublish() : (cardStyle == CardStyle.HOTCOLLECTION_STYLE ? renderHot() : renderHotNtf())
};
export default BannerCard;
