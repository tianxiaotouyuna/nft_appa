import React, { Component, FunctionComponent, useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
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
import BannerCard, { CardStyle } from "../../components/BannerCard/BannerCard";
import Banner from "../../components/Banner/Banner";
import NftAutoScroll from "../../components/AutoScroll/NftAutoScroll";
import RankCard from "@/components/RanCard/RankCard";
import HotNFtCard from "@/components/HotNFtCard/HotNFtCard";
import Carousel from 'react-native-snap-carousel'

const Home: FunctionComponent = () => {


  const [inputValue, setinputValue] = useState('');
  const [publishData, setpublishData] = useState([
    { 'thumb': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-6251efa3014f2d0f7ce0d1accc95ff21_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655400210&t=8faa71fc0de2752a60dcae21ea1a2c6a', 'name': 'NFT藏品' },
    { 'thumb': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13050014876%2F641&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655400210&t=ce7ef1afa03c07ff217cd3a63d54549b', 'name': 'NFT藏品' },
    { 'thumb': 'https://img0.baidu.com/it/u=4225805921,1113792677&fm=253&fmt=auto&app=120&f=JPEG?w=890&h=500', 'name': 'NFT藏品' },
    { 'thumb': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13050014876%2F641&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655400210&t=ce7ef1afa03c07ff217cd3a63d54549b', 'name': 'NFT藏品' },
    { 'thumb': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.11467.com%2F2021%2F09-04%2F3477865343.jpg&refer=http%3A%2F%2Fimg.11467.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655400210&t=5185900885f6af72df52c17a32aa9e2c', 'name': 'NFT藏品' }
  ]);
  const [hotData, sethotData] = useState([
    { 'head': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fen.pimg.jp%2F014%2F428%2F054%2F1%2F14428054.jpg&refer=http%3A%2F%2Fen.pimg.jp&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655434302&t=6fb858fcb2690dd20f893f7a21894f74', 'thumb': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-6251efa3014f2d0f7ce0d1accc95ff21_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655400210&t=8faa71fc0de2752a60dcae21ea1a2c6a', 'name': 'NFT藏品' },
    { 'head': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fen.pimg.jp%2F014%2F428%2F054%2F1%2F14428054.jpg&refer=http%3A%2F%2Fen.pimg.jp&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655434302&t=6fb858fcb2690dd20f893f7a21894f74', 'thumb': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13050014876%2F641&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655400210&t=ce7ef1afa03c07ff217cd3a63d54549b', 'name': 'NFT藏品' },
    { 'head': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fen.pimg.jp%2F014%2F428%2F054%2F1%2F14428054.jpg&refer=http%3A%2F%2Fen.pimg.jp&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655434302&t=6fb858fcb2690dd20f893f7a21894f74', 'thumb': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ccvalue.cn%2Fupload%2F2021%2F0825%2Fb32c02a54678449b600bc7033b8105cb.jpg&refer=http%3A%2F%2Fwww.ccvalue.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655393917&t=42e2cd3a553f361db24bbf6798e03ca5', 'name': 'NFT藏品' },
    { 'head': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fen.pimg.jp%2F014%2F428%2F054%2F1%2F14428054.jpg&refer=http%3A%2F%2Fen.pimg.jp&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655434302&t=6fb858fcb2690dd20f893f7a21894f74', 'thumb': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ccvalue.cn%2Fupload%2F2021%2F0825%2Fb32c02a54678449b600bc7033b8105cb.jpg&refer=http%3A%2F%2Fwww.ccvalue.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655393917&t=42e2cd3a553f361db24bbf6798e03ca5', 'name': 'NFT藏品' },
    { 'head': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fen.pimg.jp%2F014%2F428%2F054%2F1%2F14428054.jpg&refer=http%3A%2F%2Fen.pimg.jp&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655434302&t=6fb858fcb2690dd20f893f7a21894f74', 'thumb': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ccvalue.cn%2Fupload%2F2021%2F0825%2Fb32c02a54678449b600bc7033b8105cb.jpg&refer=http%3A%2F%2Fwww.ccvalue.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655393917&t=42e2cd3a553f361db24bbf6798e03ca5', 'name': 'NFT藏品' },
    { 'head': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fen.pimg.jp%2F014%2F428%2F054%2F1%2F14428054.jpg&refer=http%3A%2F%2Fen.pimg.jp&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655434302&t=6fb858fcb2690dd20f893f7a21894f74', 'thumb': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ccvalue.cn%2Fupload%2F2021%2F0825%2Fb32c02a54678449b600bc7033b8105cb.jpg&refer=http%3A%2F%2Fwww.ccvalue.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655393917&t=42e2cd3a553f361db24bbf6798e03ca5', 'name': 'NFT藏品' },
    { 'head': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fen.pimg.jp%2F014%2F428%2F054%2F1%2F14428054.jpg&refer=http%3A%2F%2Fen.pimg.jp&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655434302&t=6fb858fcb2690dd20f893f7a21894f74', 'thumb': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ccvalue.cn%2Fupload%2F2021%2F0825%2Fb32c02a54678449b600bc7033b8105cb.jpg&refer=http%3A%2F%2Fwww.ccvalue.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655393917&t=42e2cd3a553f361db24bbf6798e03ca5', 'name': 'NFT藏品' },
    { 'head': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fen.pimg.jp%2F014%2F428%2F054%2F1%2F14428054.jpg&refer=http%3A%2F%2Fen.pimg.jp&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655434302&t=6fb858fcb2690dd20f893f7a21894f74', 'thumb': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ccvalue.cn%2Fupload%2F2021%2F0825%2Fb32c02a54678449b600bc7033b8105cb.jpg&refer=http%3A%2F%2Fwww.ccvalue.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655393917&t=42e2cd3a553f361db24bbf6798e03ca5', 'name': 'NFT藏品' },
    { 'head': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fen.pimg.jp%2F014%2F428%2F054%2F1%2F14428054.jpg&refer=http%3A%2F%2Fen.pimg.jp&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655434302&t=6fb858fcb2690dd20f893f7a21894f74', 'thumb': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ccvalue.cn%2Fupload%2F2021%2F0825%2Fb32c02a54678449b600bc7033b8105cb.jpg&refer=http%3A%2F%2Fwww.ccvalue.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655393917&t=42e2cd3a553f361db24bbf6798e03ca5', 'name': 'NFT藏品' },
    { 'head': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fen.pimg.jp%2F014%2F428%2F054%2F1%2F14428054.jpg&refer=http%3A%2F%2Fen.pimg.jp&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655434302&t=6fb858fcb2690dd20f893f7a21894f74', 'thumb': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ccvalue.cn%2Fupload%2F2021%2F0825%2Fb32c02a54678449b600bc7033b8105cb.jpg&refer=http%3A%2F%2Fwww.ccvalue.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655393917&t=42e2cd3a553f361db24bbf6798e03ca5', 'name': 'NFT藏品' },
  ]);
  const onChangeSearch = (query: string) => {
    setinputValue(query)
  }
  const renderPublish = (item, index) => (
    <BannerCard
      data={item['item']}
      cardStyle={CardStyle.PUBLISH_STYLE}
      onTap={() => { Navigate.navigate('Search', {}) }}
      borderRadius={pxToDp(28)}
    />
  )
  const renderHot = (item, index) => (
    <BannerCard
      data={item['item']}
      cardStyle={CardStyle.HOTCOLLECTION_STYLE}
      onTap={() => { }}
      onTap={() => { Navigate.navigate('Search', {}) }}
      borderRadius={pxToDp(28)}
    />
  )
  return (
    <ScrollView
      style={styles.container}
    >
      <Searchbar
        placeholder="搜索"
        onChangeText={(query) => { onChangeSearch(query) }}
        onEndEditing={() => { Navigate.navigate('Search', {}) }}
        value={inputValue}
        icon={require('@/resources/home/Search.png')}
        style={styles.search_wraps}
        inputStyle={styles.search_input}
        selectionColor={UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE}
      />

      <View style={styles.IGO_Warps}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.IGO_Warps_Text}>分类</Text>
        </View>
      </View>
      <HomeGirdle items={[{ 'source': require('@/resources/home/art.png'), 'text': '艺术' },
      { 'source': require('@/resources/home/music.png'), 'text': '音乐' },
      { 'source': require('@/resources/home/star.png'), 'text': '明星' },
      { 'source': require('@/resources/home/movie.png'), 'text': '电影' }]} paddingHorizontal={25} style={{ marginTop: pxToDp(14) }}></HomeGirdle>

      <View style={styles.IGO_Warps}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.IGO_Warps_Text}>发行/IGO</Text>
          <Image style={styles.IGO_Warps_Image} source={require('@/resources/home/Rocket.png')} />
        </View>
        <Image style={styles.IGO_Warps_arrow} source={require('@/resources/home/return.png')} />
      </View>
      <Carousel
        data={publishData}
        activeSlideAlignment={'start'}
        renderItem={(item, index) => renderPublish(item, index)}
        initialNumToRender={1}
        sliderWidth={pxToDp(670)}
        itemWidth={pxToDp(560)}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        firstItem={0}

      />



      <View style={styles.IGO_Warps}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.IGO_Warps_Text}>热门合集</Text>
          <Image style={styles.IGO_Warps_Image} source={require('@/resources/home/popular.png')} />
        </View>
      </View>
      {/* <NftAutoScroll duration={100000} bannerCard={CardStyle.HOTCOLLECTION_STYLE} data={ hotData} ></NftAutoScroll> */}
      <Carousel
        data={hotData}
        activeSlideAlignment={'start'}
        renderItem={(item, index) => renderHot(item, index)}
        sliderWidth={pxToDp(670)}
        itemWidth={pxToDp(300)}
        inactiveSlideScale={1}
        initialNumToRender={1}
        inactiveSlideOpacity={1}
        firstItem={0}
        scrollEndDragDebounceValue={40}
      />



      <View style={styles.IGO_Warps}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.IGO_Warps_Text}>市场排行</Text>
          <Image style={styles.IGO_Warps_Image} source={require('@/resources/home/ranking.png')} />
        </View>

      </View>
      <RankCard style={{ width: pxToDp(100), height: pxToDp(100) }} data={{ 'head': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fen.pimg.jp%2F014%2F428%2F054%2F1%2F14428054.jpg&refer=http%3A%2F%2Fen.pimg.jp&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655434302&t=6fb858fcb2690dd20f893f7a21894f74', 'name': 'NFT藏品', 'plus': '-80%' }}></RankCard>


      <View style={styles.IGO_Warps}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.IGO_Warps_Text}>热门NFT</Text>
          <Image style={styles.IGO_Warps_Image} source={require('@/resources/home/popular.png')} />
        </View>
        <Image style={styles.IGO_Warps_arrow} source={require('@/resources/home/return.png')} />
      </View>
      <HotNFtCard borderRadius={14} data={{ 'head': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fen.pimg.jp%2F014%2F428%2F054%2F1%2F14428054.jpg&refer=http%3A%2F%2Fen.pimg.jp&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655434302&t=6fb858fcb2690dd20f893f7a21894f74', 'name': 'NFT藏品', 'plus': '-80%' }}></HotNFtCard>

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
