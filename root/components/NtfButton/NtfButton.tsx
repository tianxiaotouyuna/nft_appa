import React, { FunctionComponent, ReactNode, useState } from "react";
import FastImage from "react-native-fast-image";
import { View, StyleProp, ViewStyle, Pressable, Text, Image } from "react-native";
import styles from "./ntf-button";
import { UIELEMENTS } from "@/constants/index";
import Ripple from "react-native-material-ripple";
import { ImageSource } from "react-native-vector-icons/Icon";
type butonProps = {
  style?: StyleProp<ViewStyle>;
  width?: number;
  heigh?: number;
  onPress?: () => void;
  children?: ReactNode;
  imageSource?: ImageSource;
  text?: string;
  borderRadius?: number;
};

const NtfButton: FunctionComponent<butonProps> = (props) => {
  const { width, heigh, onPress, children, style, imageSource, text, borderRadius } =
    props;
  return (
    <Ripple
      rippleColor={UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE}
      onPress={onPress}
      style={[
        style,
        styles.base,
        { width: width, height: heigh, borderRadius: borderRadius },
      ]}
      rippleContainerBorderRadius={borderRadius}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          style={styles.btn_icon}
          source={imageSource}
        />
        <Text style={styles.btn_text}>{text}</Text>
      </View>
    </Ripple>
  );
};

export default NtfButton;
