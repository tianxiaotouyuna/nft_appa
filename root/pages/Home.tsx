import React, { Component } from "react";
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

export const Home = (props: any) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#f2f2f2",
        paddingHorizontal: 20,
        justifyContent: "space-between",
        paddingTop:100
      }}
    >
      <Ripple
        style={{
          height: 100,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Text>touch me</Text>
      </Ripple>
      <Card>
        <Placeholder Animation={ShineOverlay} Left={PlaceholderMedia} style={{ margin: 12 }}>
          <PlaceholderLine width={80} />
          <PlaceholderLine />
          <PlaceholderLine width={30} />
        </Placeholder>
      </Card>

      <Card>
        <Title>Custom shape and positioning</Title>
        <Placeholder Left={PlaceholderMedia} Animation={ShineOverlay} >
          <PlaceholderLine height={80} style={{ marginBottom: 12 }} />
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
