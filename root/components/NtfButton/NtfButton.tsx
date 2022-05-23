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
  textColor?: string;
  font?: number;
  borderRadius?: number;
  borderColor?: string;
  backgroundColor?: string;
};

const NtfButton: FunctionComponent<butonProps> = (props) => {
  const { width, heigh, onPress, font, style, imageSource, text,textColor, borderRadius=1000,borderColor =UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE,backgroundColor='white'} =
    props;
  return (
    <Ripple
      rippleColor={UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE}
      onPress={onPress}
      style={[
        styles.base,
        style,
        { width: width, height: heigh, borderRadius: borderRadius ,borderColor:borderColor,backgroundColor:backgroundColor},
      ]}
      rippleContainerBorderRadius={borderRadius}
    >
      <View style={{ flexDirection: "row",alignItems:"center" }}>
        {imageSource?<Image
          style={styles.btn_icon}
          source={imageSource}
        />:null}
        <Text style={[styles.btn_text,{fontSize:font,color:textColor}]}>{text}</Text>
      </View>
    </Ripple>
  );
};

export default NtfButton;
