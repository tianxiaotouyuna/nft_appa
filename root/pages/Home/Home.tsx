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
        icon='@/resources/home/Search.png'
      />
      <Ripple
        style={styles.ripple}
        onPress={() => { Navigate.navigate('Search', {}) }}

      >
        <Text>touch me</Text>
      </Ripple>
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
