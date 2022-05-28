import Bottom from "@/pageranges/markdetail/buy/bottom/bottom";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { Alert, AppState, View } from "react-native";
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
import Authorization from "@/components/Authorization/Authorization";
import ResultToast, { ResultToastStyle } from "@/components/ResultToast/ResultToast";
import { useDispatch, useSelector } from "react-redux";
import { walletActions } from "@/action/walletActions";
const Buy: FunctionComponent = () => {
  // const [data, setdata] = useState({});
  const data: any = useRoute().params?.data ?? {};
  const [showSign, setshowSign] = useState(false);
  const [heyue, setheyue] = useState(false);
  const [auth, setauth] = useState(false);

  const [showInput, setshowInput] = useState(false);
  const [showResult, setshowResult] = useState(false);
  const [appState, setappState] = useState('active');
  console.log('data======' + JSON.stringify(useRoute().params))
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
  const wallet = useSelector((state: any) => state);
    
  //   useEffect(() => {
  //   AppState.addEventListener("change", _handleAppStateChange);

  //   return () => {
  //      AppState.remove("change", _handleAppStateChange);
  //   };
  // }, [])

  const _handleAppStateChange = async (nextAppState: any) => {
    if (appState === "active" && nextAppState === "background") {
      setappState('background')
        // this condition calls when app goes in background mode
      // here you can detect application is in background, and you can pause your video

  } else if (appState === "background" && nextAppState === "active") {
    setappState('active')
    // showResultToast()
    // Alert.alert(JSON.stringify(wallet))
  
      // this condition calls when app is in foreground mode
      // here you can detect application is in active state again, 
      // and if you want you can resume your video

  }
  }

  const showAuthPop = () => {
    setauth(true)
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

  const showResultToast = () => {
    setshowResult(true)
  }
  const dispatch=useDispatch()
  const closeResultToast = () => {
    setshowResult(false)
    dispatch(walletActions.resetResult(null));
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
        showAuthPop()
      }} />

      <Modal isVisible={auth} style={styles.bottomModal}
        hideModalContentWhileAnimating={true}
        useNativeDriverForBackdrop={true}
        animationOutTiming={600}
      >
        <Authorization cancle_press={() => setauth(false)} sure_press={() => { }} data={data}></Authorization>
      </Modal>



      <Modal isVisible={wallet?.buyResult} style={styles.centerModal}
        hideModalContentWhileAnimating={true}
        animationIn='bounce'
        useNativeDriverForBackdrop={true}
        animationOutTiming={600}
      >
        <ResultToast data={wallet?.buyResult} onOk={closeResultToast} resultToastStyle={ResultToastStyle.BUY_STYLE} title='购买成功' sub_title="='恭喜您已成功拥有此NTF"/>
      </Modal>



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
        <WalletInput cancle_press={() => setshowInput(false)} sure_press={() => { }}></WalletInput>
      </Modal>
    </View>
  );
};

export default Buy;

