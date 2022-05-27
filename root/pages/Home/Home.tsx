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
import Carousel from 'react-native-snap-carousel'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FastImage from "react-native-fast-image";

const Home: FunctionComponent = () => {


  const [inputValue, setinputValue] = useState('');
  const [publishData, setpublishData] = useState( [
   {
      "id": 440821083,
      "imageUrl": 'https://img0.baidu.com/it/u=940732863,1808085947&fm=253&fmt=auto&app=138&f=JPEG?w=553&h=500',
      "tokenId": "3882",
      "assetName": '悟空来了',
      "assetAddress": "0xc784b6b8c8f8b7263689138ab9d5f400440f02cc",
      "collectionName": "THE TATTOO ARTIST",
      "salePrice": 0
    },
    {
      "id": 440821082,
      "imageUrl": 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F1011%2Fbe8ac782j00r0s6ur000vc000hs00ckc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655886615&t=92429f76e923e99c6056a5fee02ebfd6',
      "tokenId": "3876",
      "assetName": '油画',
      "assetAddress": "0xc784b6b8c8f8b7263689138ab9d5f400440f02cc",
      "collectionName": "THE TATTOO ARTIST",
      "salePrice": 0
    },
    {
      "id": 440821080,
      "imageUrl": 'https://img0.baidu.com/it/u=590006338,1231462113&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      "tokenId": "3317",
      "assetName": '猴哥来玩了',
      "assetAddress": "0x46b95a569ef932adc1ebe0000727035ee1f2da75",
      "collectionName": "Eth.r Brews Generative Collection",
      "salePrice": 0
    },
    {
      "id": 440821079,
      "imageUrl": 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20220225s%2F99%2Fw400h499%2F20220225%2F88e8-4189a62eb588fa8ef89c28e098807c3f.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655886949&t=993b49b1b7609a6e20fbc1453fc8a5f0',
      "tokenId": "2814",
      "assetName": '战争之下',
      "assetAddress": "0x11ca9693156929ee2e7e1470c5e1a55b413e9007",
      "collectionName": "Psychedelics Anonymous Psilocybin",
      "salePrice": 0
    },
    {
      "id": 440821077,
      "imageUrl": 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20220225s%2F99%2Fw400h499%2F20220225%2F88e8-4189a62eb588fa8ef89c28e098807c3f.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655886949&t=993b49b1b7609a6e20fbc1453fc8a5f0',
      "tokenId": "3873",
      "assetName": null,
      "assetAddress": "0xc784b6b8c8f8b7263689138ab9d5f400440f02cc",
      "collectionName": "THE TATTOO ARTIST",
      "salePrice": 0
    },
    {
      "id": 440821076,
      "imageUrl": 'https://img0.baidu.com/it/u=590006338,1231462113&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
      "tokenId": "3879",
      "assetName": null,
      "assetAddress": "0xc784b6b8c8f8b7263689138ab9d5f400440f02cc",
      "collectionName": "THE TATTOO ARTIST",
      "salePrice": 0
    },
    {
      "id": 440821073,
      "imageUrl": 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F1011%2Fbe8ac782j00r0s6ur000vc000hs00ckc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655886615&t=92429f76e923e99c6056a5fee02ebfd6',
      "tokenId": "3864",
      "assetName": null,
      "assetAddress": "0xc784b6b8c8f8b7263689138ab9d5f400440f02cc",
      "collectionName": "THE TATTOO ARTIST",
      "salePrice": 0
    },
    {
      "id": 440821072,
      "imageUrl": 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20220225s%2F99%2Fw400h499%2F20220225%2F88e8-4189a62eb588fa8ef89c28e098807c3f.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655886949&t=993b49b1b7609a6e20fbc1453fc8a5f0',
      "tokenId": "3881",
      "assetName": null,
      "assetAddress": "0xc784b6b8c8f8b7263689138ab9d5f400440f02cc",
      "collectionName": "THE TATTOO ARTIST",
      "salePrice": 0
    },
    {
      "id": 440821071,
      "imageUrl": 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fdingyue.ws.126.net%2F2021%2F1011%2Fbe8ac782j00r0s6ur000vc000hs00ckc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655886615&t=92429f76e923e99c6056a5fee02ebfd6',
      "tokenId": "21269221605813514809481462890651808057441306200692816149898726332250211712452",
      "assetName": null,
      "assetAddress": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      "collectionName": "ENS: Ethereum Name Service",
      "salePrice": 0
    },
    {
      "id": 440821070,
      "imageUrl": 'https://img0.baidu.com/it/u=940732863,1808085947&fm=253&fmt=auto&app=138&f=JPEG?w=553&h=500',
      "tokenId": "3875",
      "assetName": null,
      "assetAddress": "0xc784b6b8c8f8b7263689138ab9d5f400440f02cc",
      "collectionName": "THE TATTOO ARTIST",
      "salePrice": 0
    },
    {
      "id": 440821067,
      "imageUrl": 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20220225s%2F99%2Fw400h499%2F20220225%2F88e8-4189a62eb588fa8ef89c28e098807c3f.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655886949&t=993b49b1b7609a6e20fbc1453fc8a5f0',
      "tokenId": "105796204734605626712023685081731545537107694952405135557134397778624654289028",
      "assetName": null,
      "assetAddress": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      "collectionName": "ENS: Ethereum Name Service",
      "salePrice": 0
    },
  

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

  const [hotNft, sethotNft] = useState(  [{
    "id": 440821077,
    "imageUrl": 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn.sinaimg.cn%2Fsinakd20220225s%2F99%2Fw400h499%2F20220225%2F88e8-4189a62eb588fa8ef89c28e098807c3f.jpg&refer=http%3A%2F%2Fn.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655886949&t=993b49b1b7609a6e20fbc1453fc8a5f0',
    "tokenId": "3873",
    "assetName": null,
    "assetAddress": "0xc784b6b8c8f8b7263689138ab9d5f400440f02cc",
    "collectionName": "THE TATTOO ARTIST",
    "salePrice": '0.1131 ETH'
  },
  {
    "id": 440821076,
    "imageUrl": 'https://img0.baidu.com/it/u=590006338,1231462113&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
    "tokenId": "3879",
    "assetName": null,
    "assetAddress": "0xc784b6b8c8f8b7263689138ab9d5f400440f02cc",
    "collectionName": "THE TATTOO ARTIST",
    "salePrice": '0.0021 ETH'
  }],);
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
  FastImage.clearMemoryCache();
  const renderHot = (item, index) => (
    <BannerCard
      data={item['item']}
      cardStyle={CardStyle.HOTCOLLECTION_STYLE}
      onTap={() => { }}
      onTap={() => { Navigate.navigate('Search', {}) }}
      borderRadius={pxToDp(28)}
    />
  )

  useInitScreen({
    navigationOptions: {
      title:'首页',
      headerRight: () => (
        <Pressable
          onPress={() => {
            Navigate.navigate("LoginOut", {});
          }}
        >
          <Image
            style={styles.tab_right}
            source={require("@/resources/home/more.png")}
          />
        </Pressable>
      ),
      headerTitleAlign: "left",
    },
    statusBar: {
      backgroundColor: "transparent",
      barStyle: "light-content",
    },
  });
  return (
    <ScrollView style={[styles.container, { marginBottom: 100 + useSafeAreaInsets().bottom }]}>
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



      {/* <View style={styles.IGO_Warps}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.IGO_Warps_Text}>市场排行</Text>
          <Image style={styles.IGO_Warps_Image} source={require('@/resources/home/ranking.png')} />
        </View>

      </View> */}
      {/* <RankCard style={{ width: pxToDp(100), height: pxToDp(100) }} data={{ 'head': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fen.pimg.jp%2F014%2F428%2F054%2F1%2F14428054.jpg&refer=http%3A%2F%2Fen.pimg.jp&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655434302&t=6fb858fcb2690dd20f893f7a21894f74', 'name': 'NFT藏品', 'plus': '-80%' }}></RankCard> */}
      {/* <Card>
        <Placeholder Animation={ShineOverlay} Left={PlaceholderMedia} style={styles.spacing1}>
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
      </Card>
      <Card>
        <Placeholder Animation={ShineOverlay} Left={PlaceholderMedia} style={styles.spacing1}>
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
      </Card> */}


      <View style={styles.IGO_Warps}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.IGO_Warps_Text}>热门NFT</Text>
          <Image style={styles.IGO_Warps_Image} source={require('@/resources/home/popular.png')} />
        </View>
        <Image style={styles.IGO_Warps_arrow} source={require('@/resources/home/return.png')} />
      </View>
      <BannerCard
        onTap={() => { Navigate.navigate('NtfDetail', {}) }}
        data={hotNft}
        cardStyle={CardStyle.HOTNTF_STYLE}
      />
      {/* <Card>
        <Placeholder Animation={ShineOverlay} Left={PlaceholderMedia} style={styles.spacing1}>
          <PlaceholderLine width={90} />
          <PlaceholderLine width={80} />
          <PlaceholderLine width={30} />
        </Placeholder>
      </Card>
      <Card>
        <Placeholder Animation={ShineOverlay} Left={PlaceholderMedia} style={styles.spacing1}>
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
      </Card> */}
      
    </ScrollView>
  );
};
export default Home
