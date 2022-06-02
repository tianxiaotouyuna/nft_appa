import React, { FunctionComponent } from "react";
import { Pressable, Image,View } from "react-native";
import {  Card, Title } from "react-native-paper";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  ShineOverlay,
} from "rn-placeholder";
import styles from '@/styles/pages/home/search/search'
import useInitScreen from "@/hooks/useInitScreen";
import NFTSearchBar, { SearchStyle } from "@/components/NFTSearchBar/NFTSearchBar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { pxToDp } from "@/utils/system";
import LinearGradient from 'react-native-linear-gradient';

 const Category: FunctionComponent = () => { 
   useInitScreen({
    navigationOptions: {
      title:'艺术',
      headerTransparent:true
  },
  statusBar: {
      backgroundColor: "transparent",
      barStyle: "light-content"
  }
})
  return (
    <View
      style={styles.container}
    >
      <LinearGradient
                style={{width:'100%',height:pxToDp(300)}}
                colors={["#E89696", "#FD344D"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 1 }}
            ></LinearGradient>
    </View>
  );
};
export default Category
