import React, { FunctionComponent } from "react";
import { Pressable, Image,View } from "react-native";
import {  Card, Title } from "react-native-paper";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  ShineOverlay,
} from "rn-placeholder";
import styles from '@/styles/pages/home/home'
import useInitScreen from "@/hooks/useInitScreen";

 const Search: FunctionComponent = () => { 
   useInitScreen({
    navigationOptions: {
      title:'搜索',
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
      <Card>
        <Placeholder Animation={ShineOverlay} Left={PlaceholderMedia} style={styles.spacing1}>
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
      </Card>
    </View>
  );
};
export default Search
