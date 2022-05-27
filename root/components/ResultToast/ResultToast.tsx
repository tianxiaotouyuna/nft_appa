import React, { FunctionComponent, ReactNode, useEffect, useState } from "react";
import {
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  Text,
  Image,
} from "react-native";
import styles from "./styles";
import { pxToDp, pxToSp } from "@/utils/system";
import { UIELEMENTS } from "@/constants/";
export enum ResultToastStyle {
    BUY_STYLE = 1, //发行
}
type ResultToastProps = {
  style?: StyleProp<ViewStyle>;
  resultToastStyle?: ResultToastStyle;
  onOk?: () => void;
  data?:any;
  title?:string;
  sub_title?:string
};

const ResultToast: FunctionComponent<ResultToastProps> = (props) => {
  const { style, title, onOk ,sub_title,resultToastStyle } = props;
  const renderLoginOut = () => {
    return (
      <View style={[styles.container, style]}>
        <View style={{paddingVertical:pxToDp(60)}}>
          <Text style={{fontWeight:'bold',fontSize:pxToDp(36),textAlign:'center'}}>{title}</Text>
          <Text style={{fontSize:pxToDp(28),textAlign:'center',marginTop:pxToDp(20)}}>{sub_title}</Text>
        </View>

        <View
          style={{
            backgroundColor: "#F0F0F0",
            height: pxToDp(2),
            width:'100%'
          }}
        />
       <Pressable onPress={onOk} style={{height:pxToDp(88),justifyContent:"center",width:'100%',alignItems:"center"}}>
           <Text style={{color:UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE,fontSize:pxToSp(34)}}>知道啦</Text>
       </Pressable>
      </View>
    )
  }
  return (
    renderLoginOut()
  );
};

export default ResultToast;
