import Bottom from "@/pageranges/markdetail/buy/bottom/bottom";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { View, Animated, StyleSheet, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useInitScreen from "@/hooks/useInitScreen";
import styles from "@/styles/pages/market/buy";
import { MarketService } from "@/services/index";
import FastImage from "react-native-fast-image";
import { Text } from "react-native-animatable";
import { pxToDp, pxToSp } from "@/utils/system";
import { useRoute } from "@react-navigation/native";
import SignPop from "@/components/SignPop/SignPop";
import Modal from "react-native-modal";
import ContractInteraction from "@/components/ContractInteraction/ContractInteraction";
import WalletInput from "@/components/WalletInput/WalletInput";

const Buy: FunctionComponent = () => {
  // const [data, setdata] = useState({});
  const data: any = useRoute().params?.data ?? {};
  const [showSign, setshowSign] = useState(false);
  const [heyue, setheyue] = useState(false);
  const [showInput, setshowInput] = useState(false);
  console.log('data======' + JSON.stringify(data))
  useInitScreen({
    navigationOptions: {
      title: '购买',
      headerTitleAlign: "center",
    },
    statusBar: {
      backgroundColor: "transparent",
      barStyle: "light-content",
    },
  });
  useEffect(() => {
    getData()

  }, [])

  const getData = async () => {

    try {
      const order = await MarketService.getAssetsOneInfo();
      setdata(order?.data)
      console.log('goods22=' + JSON.stringify(order))

    } catch (error) {
    }
  }

  const showSginPop = () => {
    setshowSign(true)
  }
  const showHeyuePop = () => {
    setheyue(true)

  }
  const showInputPop = () => {
    setshowInput(true)

  }
  return (
    <View style={[styles.container]}>
      <View style={{ flexDirection: "row" }}>
        <FastImage
          style={[styles.publish_image]}
          resizeMode="cover"
          source={{ uri: data?.imageThumbnailUrl }}
        />
        <View style={{ flex: 1, justifyContent: "space-between", paddingVertical: pxToDp(10) }}>
          <Text style={{ fontSize: pxToSp(28), color: '#707A83' }}>{data?.collectionName}</Text>
          <Text style={{ fontSize: pxToSp(32), color: '#383838' }}>{data?.assetName}</Text>
        </View>
      </View>
      <Bottom onPress_1={() => {
        showSginPop()
      }} />

<Modal isVisible={showSign} style={styles.bottomModal}
        hideModalContentWhileAnimating={true}
        useNativeDriverForBackdrop={true}
        animationOutTiming={600}
      >
        <SignPop cancle_press={() => setshowSign(false)} sure_press={showHeyuePop}></SignPop>
      </Modal>

      <Modal isVisible={heyue} style={styles.bottomModal}
        hideModalContentWhileAnimating={true}
        useNativeDriverForBackdrop={true}
        animationOutTiming={600}
      >
        <ContractInteraction cancle_press={() => setheyue(false)} sure_press={showInputPop} data={data}></ContractInteraction>
      </Modal>

      <Modal isVisible={showInput} style={styles.bottomModal}
        hideModalContentWhileAnimating={true}
        useNativeDriverForBackdrop={true}
        animationOutTiming={600}
      >
        <WalletInput cancle_press={() => setshowInput(false)} sure_press={()=>{}}></WalletInput>
      </Modal>
    </View>
  );
};

export default Buy;

