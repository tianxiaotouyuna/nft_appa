import React, { FunctionComponent, ReactNode, useState } from "react";
import {
  View,
} from "react-native";
import styles from "./assetBtn-style";
import NtfButton from "@/components/NtfButton/NtfButton";
import { pxToDp } from "@/utils/system";
type AssetBtnWrapsProps = {
  onPress_1?: () => void;
  onPress_2?: () => void;
  onPress_3?: () => void;
};
const AssetBtnWraps: FunctionComponent<AssetBtnWrapsProps> = (props) => {
  const { onPress_1,onPress_2,onPress_3 } =
  props;
  return (
    <View style={styles.container}>
      <NtfButton
        width={pxToDp(590)}
        heigh={pxToDp(100)}
        onPress={ onPress_1}
        text={"Metamask"}
        imageSource={require("@/resources/位图1.png")}
        borderRadius={pxToDp(12)}
      />

      <NtfButton
        width={pxToDp(590)}
        heigh={pxToDp(100)}
        onPress={ onPress_2}
        text={"imToken"}
        imageSource={require("@/resources/位图2.png")}
        borderRadius={pxToDp(12)}
      />

      <NtfButton
        width={pxToDp(590)}
        heigh={pxToDp(100)}
        onPress={onPress_3}
        text={"TokenPocket"}
        imageSource={require("@/resources/位图3.png")}
        borderRadius={pxToDp(12)}
      />
    </View>
  );
};

export default AssetBtnWraps;
