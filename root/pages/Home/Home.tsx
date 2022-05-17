import React, { Component, FunctionComponent, useState } from "react";
import { View, Text, Image } from "react-native";
import Ripple from "react-native-material-ripple";
import { Button, Card, Searchbar, Title } from "react-native-paper";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  ShineOverlay,
} from "rn-placeholder";
import styles from '@/styles/pages/home/home'
import useInitScreen from "@/hooks/useInitScreen";
import { Navigate } from "@/utils/index";
import { pxToDp, pxToSp } from "@/utils/system";
import { UIELEMENTS } from "@/constants/index";
import HomeGirdle from "@/components/HomeGirdle";
import { ScrollView } from "react-native-gesture-handler";


const Home: FunctionComponent = () => {
  const [inputValue, setinputValue] = useState('');
  const onChangeSearch = (query:string) => {
    setinputValue(query)
  }
  return (
    <ScrollView
      style={styles.container}
    >
      <Searchbar
        placeholder="搜索"
        onChangeText={(query)=>{onChangeSearch(query)}}
        onEndEditing={() => { Navigate.navigate('Search', {}) }}
        value={inputValue}
        icon={require('@/resources/home/Search.png')}
        style={styles.search_wraps}
        inputStyle={styles.search_input}
        selectionColor={UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE  }
      />

      <View style={styles.IGO_Warps}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.IGO_Warps_Text}>分类</Text>
        </View>
      </View>
      <HomeGirdle items={[{ 'source': require('@/resources/home/art.png'), 'text': '艺术' },
      { 'source': require('@/resources/home/music.png'), 'text': '音乐' },
      { 'source': require('@/resources/home/star.png'), 'text': '明星' },
      { 'source': require('@/resources/home/movie.png'), 'text': '电影' }]} paddingHorizontal={25} style={{marginTop:pxToDp(14)}}></HomeGirdle>

      <View style={styles.IGO_Warps}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.IGO_Warps_Text}>发行/IGO</Text>
          <Image style={styles.IGO_Warps_Image} source={require('@/resources/home/Rocket.png')} />
        </View>
        <Image style={styles.IGO_Warps_arrow} source={require('@/resources/home/return.png')} />

      </View>
      <Card>
        <Placeholder Animation={ShineOverlay} Left={PlaceholderMedia} style={styles.spacing1}>
          <PlaceholderLine width={90} />
          <PlaceholderLine width={80} />
          <PlaceholderLine width={30} />
        </Placeholder>
      </Card>



      <View style={styles.IGO_Warps}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.IGO_Warps_Text}>热门合集</Text>
          <Image style={styles.IGO_Warps_Image} source={require('@/resources/home/popular.png')} />
        </View>

      </View>
      <Card>
        <Placeholder Animation={ShineOverlay} Left={PlaceholderMedia} style={styles.spacing1}>
          <PlaceholderLine width={90} />
          <PlaceholderLine width={80} />
          <PlaceholderLine width={30} />
        </Placeholder>
      </Card>



      <View style={styles.IGO_Warps}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.IGO_Warps_Text}>市场排行</Text>
          <Image style={styles.IGO_Warps_Image} source={require('@/resources/home/ranking.png')} />
        </View>

      </View>
      <Card>
        <Placeholder Animation={ShineOverlay} Left={PlaceholderMedia} style={styles.spacing1}>
          <PlaceholderLine width={90} />
          <PlaceholderLine width={80} />
          <PlaceholderLine width={30} />
        </Placeholder>
      </Card>



      <View style={styles.IGO_Warps}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.IGO_Warps_Text}>热门NFT</Text>
          <Image style={styles.IGO_Warps_Image} source={require('@/resources/home/popular.png')} />
        </View>

      </View>

      <Card>
        <Placeholder Animation={ShineOverlay} Left={PlaceholderMedia} style={styles.spacing1}>
          <PlaceholderLine width={90} />
          <PlaceholderLine width={80} />
          <PlaceholderLine width={30} />
        </Placeholder>
      </Card>

    </ScrollView>
  );
};
export default Home
