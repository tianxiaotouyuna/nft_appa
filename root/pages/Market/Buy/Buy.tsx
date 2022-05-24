import Bottom from "@/pageranges/markdetail/buy/bottom/bottom";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { View, Animated, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useInitScreen from "@/hooks/useInitScreen";
import styles from "@/styles/pages/market/buy";
import { MarketService } from "@/services/index";
import FastImage from "react-native-fast-image";
import { Text } from "react-native-animatable";
import { pxToDp, pxToSp } from "@/utils/system";

const Buy: FunctionComponent = () => {
  const [data, setdata] = useState({});

  useInitScreen({
    navigationOptions: {
      title: '购买',
      headerTitleAlign: "center",
    },
    statusBar: {
      backgroundColor: "transparent",
      barStyle: "light-content",
    },
  });
  useEffect(() => {
    getData()

  }, [])

  const getData = async () => {

    try {
      const order = await MarketService.getAssetsOneInfo();
      setdata(order?.data)
      console.log('goods22=' + JSON.stringify(order))

    } catch (error) {
    }
  }
  return (
    <View style={[styles.container]}>
      <View style={{ flexDirection: "row" }}>
        <FastImage
          style={[styles.publish_image]}
          resizeMode="cover"
          source={{ uri: data?.imageThumbnailUrl }}
        />
        <View style={{flex:1,justifyContent:"space-between",paddingVertical:pxToDp(10)}}>
          <Text style={{fontSize:pxToSp(28),color:'#707A83'}}>{data?.assetName}</Text>
        </View>
      </View>
      <Bottom />
    </View>
  );
};

export default Buy;

