import MarketDetailWraps from "@/pageranges/MarketDetailWraps/MarketDetailWraps";
import { MarketService } from "@/services/index";
import { windowHeight, windowWidth } from "@/utils/system";
import { useNavigation } from "@react-navigation/native";
import { useHeaderHeight } from "@react-navigation/stack";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { View, Button, Platform, Alert, Image, Pressable, Animated, StyleSheet, Text } from "react-native";
import { Icon } from 'react-native-elements';
import FastImage from "react-native-fast-image";
const NtfDetail: FunctionComponent = () => {
  const [data, setdata] = useState({});
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
  const navigation=useNavigation();
  useEffect(() => {
    getData()
  
  }, [])
  
  useEffect(() => {
    navigation.setOptions({
      // headerStyle: {
      //   opacity: headerOpacity,
      // },
      headerLeft: () => (
        <Animated.View 
        style={{
          borderRadius: 500,
          padding: 5,
          marginLeft: 10,
          opacity:headerOpacity2,backgroundColor:'white'
        }}>
        <Animated.Image source={require('@/resources/home/return_2.png')}
       ></Animated.Image>
        </Animated.View>
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

    const getData=async ()=>{
      
      try {
        const order = await MarketService.getAssetsOneInfo();
        setdata(order?.data)
        console.log('goods22=' + JSON.stringify(order))

    } catch (error) {
    }
    }
  return (
    <View style={[styles.container]}>
      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: 0 }}
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
        style={styles.image }
        resizeMode="cover"
        source={{ uri: data?.imageThumbnailUrl }}
      />
        <MarketDetailWraps data={data} />
      </Animated.ScrollView>
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
    width:windowWidth,
    height:windowWidth
  },
});


export default NtfDetail;

