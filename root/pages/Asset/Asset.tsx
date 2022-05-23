import React, { FunctionComponent, useEffect, useState } from "react";
import { View, Pressable, Alert } from "react-native";
import Modal from "react-native-modal";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import { Text } from "react-native-paper";
import { useDispatch } from "react-redux";
import { Image } from "react-native-animatable";
import styles from "@/styles/pages/asset/asset";
import AssetBtnWraps from "@/pageranges/AssetBtnWraps/AssetBtnWraps";
import AssetTopBg from "@/components/AssetTopBg/AssetTopBg";
import { pxToDp } from "@/utils/system";
import NtfButton from "@/components/NtfButton/NtfButton";
import { walletActions } from "@/action/walletActions";
import PopBtn from "@/components/LoginOutBtn/PopBtn";
import { useNavigation } from "@react-navigation/native";
import { Navigate } from "@/utils/index";
import { SafeAreaView } from "react-native-safe-area-context";
const Asset: FunctionComponent = () => {
  const connector = useWalletConnect(); // valid
  const [showLoginout, setshowLoginout] = useState(false);
  const [ntfData, setntfData] = useState([]);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(walletActions.disconnect(connector));
    setshowLoginout(false)
  };
  const rightBtnClick = () => {setshowLoginout(true)};

  const nav=useNavigation()

  const refreshHeaderData= ()=>{

    if(connector.connected){
        nav.setOptions(
          {
            title: "资产",
            headerTitleAlign: "left",
            headerRight: () => (
                <Pressable
                  onPress={() => {
                    rightBtnClick();
                  }}
                >
                  <Image
                    style={styles.tab_right}
                    source={require("@/resources/exit.png")}
                  />
                </Pressable>
              ),
          }
        )
      }
      else {
        nav.setOptions(
          {
            title: "资产",
            headerTitleAlign: "left",
            headerRight:null
          }
        )
      }

  }
  
  useEffect(() => {
    refreshHeaderData();
}, [connector])
  
  const showButton = () => {
    if (connector.connected == false) {
      return (
        <>
          <Image
            style={styles.btn_icon}
            source={require("@/resources/nolinkedwallet.png")}
          />
          <Text style={styles.btn_text}>您还没有链接钱包</Text>
          <AssetBtnWraps />
        </>
      );
    } else {
      return (
        <>
          <AssetTopBg />
          <View
            style={{
              justifyContent: "center",
              alignSelf: "flex-start",
              marginLeft: pxToDp(66),
            }}
          >
            <View
              style={{
                alignItems: "center",
                height: pxToDp(70),
                justifyContent: "space-between",
                marginTop: pxToDp(46),
              }}
            >
              <Text>NFT</Text>
              <View style={styles.img_active} />
            </View>
          </View>
          <View style={styles.separator} />

          {ntfData.length == 0 ? (
            <NtfButton
      width={pxToDp(456)}
              heigh={pxToDp(100)}
              text="“暂无NFT”去市场看看"
      onPress={() => { Navigate.navigate('市场', {}) }}
      font={pxToDp(28)}
              style={{
                backgroundColor: "#EEF1FF",
                borderWidth: 0,
                margin: pxToDp(200),
              }}
            />
          ) : null}
        </>
      );
    }
  };

  return (
    <SafeAreaView>
    <View style={styles.container}>
      {showButton()}

      <Modal isVisible={showLoginout} style={styles.bottomModal}>
        <PopBtn cancle_press={()=>setshowLoginout(false)} sure_press={logout}></PopBtn>
      </Modal>
    </View>
    </SafeAreaView>
  );
};

export default Asset;
