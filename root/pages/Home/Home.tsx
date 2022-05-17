import React, { Component, FunctionComponent, useState } from "react";
import { View, Text, Image } from "react-native";
import Ripple from "react-native-material-ripple";
import {  Button, Card, Searchbar, Title } from "react-native-paper";
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
import BannerCard, { CardStyle } from "../BannerCard/BannerCard";
import Banner from "../Banner/Banner";
import NftAutoScroll from "../AutoScroll/NftAutoScroll";


const Home: FunctionComponent = () => {
  const [searchQuery, setsearchQuery] = useState('');
const onChangeSearch=()=>{
  
}
  return (
    <View
      style={styles.container}
    >
      <Searchbar
        placeholder="搜索"
        onChangeText={onChangeSearch}
        value={searchQuery}
        icon={require('@/resources/home/Search.png')}
        style={{ marginVertical:pxToDp(24),borderColor:'#3352DB',borderWidth:pxToDp(1),borderRadius:pxToDp(10000),height:pxToDp(72),alignItems:"center",justifyContent:"center",flexDirection:"row",width:pxToDp(686),alignSelf:"center"}}
        inputStyle={{marginLeft:-10,fontSize:pxToSp(26),color:'#AAAAAA',textAlignVertical:"center",flex:1,height:pxToDp(100),alignSelf:"center"}}
      />
      <Ripple
        style={styles.ripple}
        onPress={() => { Navigate.navigate('Search', {}) }}

      >
        <Text>touch mea</Text>
      </Ripple>
      <NftAutoScroll data={[
{'thumb':'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-6251efa3014f2d0f7ce0d1accc95ff21_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655400210&t=8faa71fc0de2752a60dcae21ea1a2c6a','name':'NFT藏品'},
{'thumb':'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13050014876%2F641&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655400210&t=ce7ef1afa03c07ff217cd3a63d54549b','name':'NFT藏品'},
{'thumb':'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ccvalue.cn%2Fupload%2F2021%2F0825%2Fb32c02a54678449b600bc7033b8105cb.jpg&refer=http%3A%2F%2Fwww.ccvalue.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655393917&t=42e2cd3a553f361db24bbf6798e03ca5','name':'NFT藏品'},
{'thumb':'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.11467.com%2F2021%2F09-04%2F3477865343.jpg&refer=http%3A%2F%2Fimg.11467.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655400210&t=5185900885f6af72df52c17a32aa9e2c','name':'NFT藏品'}
  ]} ></NftAutoScroll>
  <Banner bannerCard={CardStyle.HOTCOLLECTION_STYLE} width={pxToDp(1400)} height={pxToDp(440)} data={[
{'thumb':'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic2.zhimg.com%2Fv2-6251efa3014f2d0f7ce0d1accc95ff21_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic2.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655400210&t=8faa71fc0de2752a60dcae21ea1a2c6a','name':'NFT藏品'},
{'thumb':'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13050014876%2F641&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655400210&t=ce7ef1afa03c07ff217cd3a63d54549b','name':'NFT藏品'},
{'thumb':'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ccvalue.cn%2Fupload%2F2021%2F0825%2Fb32c02a54678449b600bc7033b8105cb.jpg&refer=http%3A%2F%2Fwww.ccvalue.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655393917&t=42e2cd3a553f361db24bbf6798e03ca5','name':'NFT藏品'},
{'thumb':'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ccvalue.cn%2Fupload%2F2021%2F0825%2Fb32c02a54678449b600bc7033b8105cb.jpg&refer=http%3A%2F%2Fwww.ccvalue.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655393917&t=42e2cd3a553f361db24bbf6798e03ca5','name':'NFT藏品'},
{'thumb':'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ccvalue.cn%2Fupload%2F2021%2F0825%2Fb32c02a54678449b600bc7033b8105cb.jpg&refer=http%3A%2F%2Fwww.ccvalue.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655393917&t=42e2cd3a553f361db24bbf6798e03ca5','name':'NFT藏品'},
{'thumb':'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ccvalue.cn%2Fupload%2F2021%2F0825%2Fb32c02a54678449b600bc7033b8105cb.jpg&refer=http%3A%2F%2Fwww.ccvalue.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655393917&t=42e2cd3a553f361db24bbf6798e03ca5','name':'NFT藏品'},
{'thumb':'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ccvalue.cn%2Fupload%2F2021%2F0825%2Fb32c02a54678449b600bc7033b8105cb.jpg&refer=http%3A%2F%2Fwww.ccvalue.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655393917&t=42e2cd3a553f361db24bbf6798e03ca5','name':'NFT藏品'},
{'thumb':'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ccvalue.cn%2Fupload%2F2021%2F0825%2Fb32c02a54678449b600bc7033b8105cb.jpg&refer=http%3A%2F%2Fwww.ccvalue.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655393917&t=42e2cd3a553f361db24bbf6798e03ca5','name':'NFT藏品'},
{'thumb':'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.11467.com%2F2021%2F09-04%2F3477865343.jpg&refer=http%3A%2F%2Fimg.11467.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655400210&t=5185900885f6af72df52c17a32aa9e2c','name':'NFT藏品'}
]} ></Banner>
      {/* <BannerCard  data={{'thumb':'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ccvalue.cn%2Fupload%2F2021%2F0825%2Fb32c02a54678449b600bc7033b8105cb.jpg&refer=http%3A%2F%2Fwww.ccvalue.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655393917&t=42e2cd3a553f361db24bbf6798e03ca5','name':'NFT藏品'}} cardStyle={CardStyle.PUBLISH_STYLE} onTap={()=>{}} borderRadius={pxToDp(28)}/> */}
      {/* <BannerCard  data={{'thumb':'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.ccvalue.cn%2Fupload%2F2021%2F0825%2Fb32c02a54678449b600bc7033b8105cb.jpg&refer=http%3A%2F%2Fwww.ccvalue.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655393917&t=42e2cd3a553f361db24bbf6798e03ca5','name':'NFT藏品','head':'https://img0.baidu.com/it/u=4238375329,570220649&fm=253&fmt=auto&app=138&f=JPEG?w=502&h=500'}} cardStyle={CardStyle.HOTCOLLECTION_STYLE} onTap={()=>{}} borderRadius={pxToDp(28)}/> */}
      <Card>
        <Placeholder Animation={ShineOverlay} Left={PlaceholderMedia} style={styles.spacing1}>
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
      </Card>

      <Card>
        <Title>Custom shape and positioning</Title>
        <Placeholder Left={PlaceholderMedia} Animation={ShineOverlay} >
          <PlaceholderLine height={80} style={styles.spacing2} />
          <PlaceholderLine />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <PlaceholderMedia />
            <PlaceholderMedia />
            <PlaceholderMedia />
          </View>
          <PlaceholderLine />
        </Placeholder>
      </Card>
    </View>
  );
};
export default Home
