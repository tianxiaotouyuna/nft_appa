import React, { Component, FunctionComponent } from "react";
import { View, Text } from "react-native";
import Ripple from "react-native-material-ripple";
import { Button, Card, Title } from "react-native-paper";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
  Loader,
  Progressive,
  Shine,
  ShineOverlay,
} from "rn-placeholder";
import styles from '@/styles/pages/home/home'

 const Home: FunctionComponent = () => {
  return (
    <View
      style={styles.container}
    >
      <Ripple
        style={styles.ripple}
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
