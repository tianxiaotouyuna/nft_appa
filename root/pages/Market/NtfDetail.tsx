import Bottom from "@/pageranges/markdetail/bottom/Bottom";
import Center from "@/pageranges/markdetail/center/Center";
import { MarketService } from "@/services/index";
import { pxToDp, windowHeight, windowWidth } from "@/utils/system";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { View, Button, Platform, Alert, Image, Pressable, Animated, StyleSheet, Text } from "react-native";
import FastImage from "react-native-fast-image";
import {
  findNodeHandle,
  UIManager
} from 'react-native';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Navigate } from "@/utils/index";
import { Placeholder, PlaceholderLine, PlaceholderMedia, ShineOverlay } from "rn-placeholder";

const NtfDetail: FunctionComponent = () => {
  const params: any = useRoute().params?.item ?? {};
  const [data, setdata] = useState({});
  const bottomRef = useRef<any>();
  const [imageEnd, setimageEnd] = useState(false);
  const yOffset = useRef(new Animated.Value(0)).current;
  const headerOpacity = yOffset.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  const headerOpacity2 = yOffset.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 1],
    extrapolate: "clamp",
  });
  const headerOpacity3 = yOffset.interpolate({
    inputRange: [windowWidth - (44 + useSafeAreaInsets().top) + 40, windowWidth - (44 + useSafeAreaInsets().top) + 80],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  const backButtonBackgroundColorAnimation = yOffset.interpolate({
    inputRange: [0, 130],
    outputRange: ['rgba(0,0,0,0.4)', 'rgba(0,0,0,0)'], // gray transparent to transparent
    extrapolate: 'clamp',
  });

  const backArrowColorAnimation = yOffset.interpolate({
    inputRange: [0, 130],
    outputRange: ['rgb(255,255,255)', 'rgb(0,0,0)'], // white to black
    extrapolate: 'clamp',
  });
  const navigation = useNavigation();
  useEffect(() => {
    getData()

  }, [])

  useEffect(() => {
    navigation.setOptions({
      // headerStyle: {
      //   opacity: headerOpacity,
      // },
      title: data?.assetName,
      headerTitleStyle: { opacity: headerOpacity3 },
      headerLeft: () => (
        <Pressable onPress={() => Navigate.goBack()}>
          <Animated.View
            style={{
              borderRadius: 500,
              padding: 5,
              marginLeft: 10,
              opacity: headerOpacity2, backgroundColor: 'white'
            }}>
            <Animated.Image source={require('@/resources/home/return_2.png')}
            ></Animated.Image>
          </Animated.View>
        </Pressable>
      ),
      headerBackground: () => (
        <Animated.View
          style={{
            backgroundColor: "white",
            ...StyleSheet.absoluteFillObject,
            opacity: headerOpacity,
          }}
        />
      ),
      headerTransparent: true,
    });
  }, [
    headerOpacity,
    navigation,
    backArrowColorAnimation,
    backButtonBackgroundColorAnimation,]);

  const getData = async () => {

    const order = await MarketService.getAssetsOneInfo({ 'AssetContractAddress': params?.assetAddress, 'tokenId': params?.tokenId }, {});
    setdata(order?.data)
    console.log(JSON.stringify('data==='+JSON.stringify(order)))

  }

  return (
    <View style={[styles.container]}>
      <Animated.ScrollView
        style={{ marginBottom: pxToDp(165) + useSafeAreaInsets().bottom }}
        contentContainerStyle={{ paddingTop: 0 }}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: yOffset,
                },
              },
            },
          ],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >

        <FastImage
          style={imageEnd ? styles.image : { width: 0, height: 0 }}
          resizeMode="cover"
          source={{ uri: data?.imageThumbnailUrl }}
          onLoadEnd={() => {
            setimageEnd(true)
          }}
          fallback={true}
        />
        {imageEnd == false ?
          (
              <Placeholder Animation={ShineOverlay} >
                <PlaceholderMedia style={[styles.image]} />
              </Placeholder>
          ) : null}
        <Center data={data} />
        <Center data={data} />
      </Animated.ScrollView>


      <Bottom onPress_2={() => { Navigate.navigate('Buy', {}) }} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: windowWidth,
    height: windowWidth, backgroundColor: '#EEEEEE'
  },
});


export default NtfDetail;

