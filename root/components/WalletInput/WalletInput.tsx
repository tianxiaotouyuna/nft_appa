import React, { FunctionComponent, ReactNode, useEffect, useState } from "react";
import FastImage from "react-native-fast-image";
import {
  View,
  StyleProp,
  ViewStyle,
  Pressable,
  Text,
  Image,
  Alert,
} from "react-native";
import styles from "./styles";
import Bottom from "@/pageranges/markdetail/buy/bottom/bottom";
import { Navigate, Storage } from "@/utils/index";
import PopBtn from "../LoginOutBtn/PopBtn";
import NtfButton from "../NtfButton/NtfButton";
import { pxToDp, pxToSp } from "@/utils/system";
import PwdInput from "../PwdInput/PwdInput";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import { CacheKeys } from "@/constants/";
export enum CardStyle {
  LOGINOUT_STYLE = 1, //退出登录
}
type PopProps = {
  style?: StyleProp<ViewStyle>;
  cardStyle?: CardStyle;
  sure_press?: () => void;
  cancle_press?: () => void;
};

const WalletInput: FunctionComponent<PopProps> = (props) => {
  const { style, cardStyle, sure_press, cancle_press } = props;
  const connector = useWalletConnect(); // valid
  const [wallet, setwallet] = useState();
  
  useEffect(() => {
    get_storageInfo();
}, [])
  
  const get_storageInfo =async ()=>{
   let info = await Storage.load(CacheKeys.WALLETINFO);
   setwallet(info)
   console.log('info=========='+JSON.stringify(info))
  }
  const buy=()=>{
  //   {
  //     "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
  //     "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
  //     "gas": "0x76c0",
  //     "gasPrice": "0x9184e72a000",
  //     "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
  //     "value": "0x9184e72a"
  // }
      connector.signPersonalMessage({
        "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
        "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",//20字节，发送方地址
        "gas": "0x76c0",
        "gasPrice": "0x9184e72a000",
        "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",//20字节，接收方地址，当为空时，为创建合约交易；
        "value": "0x9184e72a"
    }).then(async function (result: any) {
          console.log("成功：" + JSON.stringify(result));
          Alert.alert('1')
        })
        .catch(function (error: any) {
          console.log("失败：" + error);
          Alert.alert('2')
        });
  }
  const renderLoginOut=()=>{
    return(

      <View style={[styles.modalContent, style]}>
      <View style={{ flexDirection: "row", width: '100%', alignItems: "center",justifyContent:"space-between" }}>
    
        <Text style={{ fontSize: pxToSp(32) ,fontWeight:"bold",marginLeft:pxToDp(10)}}>钱包密码</Text>
       <Pressable onPress={cancle_press}>

        <Image
        style={styles.image}
        source={require("@/resources/closure.png")}
      />
       </Pressable>
      </View>

      <PwdInput style={{width:pxToDp(606),height:pxToDp(84),marginTop:pxToDp(44),borderRadius:pxToDp(16),borderWidth:pxToDp(2),borderColor:'#E8E8E8'}}></PwdInput>
      <Text style={{ fontSize: pxToSp(24) ,color:'#3352DB',alignSelf:"flex-end",marginTop:pxToDp(12)}}>忘记密码</Text>
    
      <View style={{justifyContent: "center", alignItems: "center" ,width:'100%',marginTop:pxToDp(40)}}>
          <NtfButton loadingUse={true} text="确定" width={pxToDp(492)} heigh={pxToDp(84)} textColor='white' borderRadius={pxToDp(12)} backgroundColor='#3352DB' borderColor='#3352DB' onPress={buy} >
            {" "}
          </NtfButton>
      </View>

    </View>
  )
    }
  return (
    renderLoginOut()
  );
};

export default WalletInput;
