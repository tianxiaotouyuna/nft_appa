import React, { FunctionComponent, useEffect, useState } from "react";
import { View, Button, Platform, Alert, Image } from "react-native";

import { useWalletConnect } from "@walletconnect/react-native-dapp";
import Ripple from "react-native-material-ripple";
import { Searchbar, Text } from "react-native-paper";
import useWalletInfo from "@/hooks/useWalletInfo";
import { ReduxToken, UIELEMENTS } from "@/constants/index";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/styles/pages/market/market";
import useInitScreen from "@/hooks/useInitScreen";
import { Navigate } from "@/utils/index";
import DropDownPicker from 'react-native-dropdown-picker';
import { color } from "react-native-reanimated";
import { pxToDp, pxToSp } from "@/utils/system";
const Market: FunctionComponent = () => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {
      label: '价格从高到低', value: '价格从高到低', labelStyle: {
        color: UIELEMENTS.DEFAULT_HEADER_COLOR, paddingHorizontal: pxToDp(40), fontSize: pxToSp(28)
      }
    },
    {
      label: '价格从低到高', value: '价格从低到高', labelStyle: {
        color: UIELEMENTS.DEFAULT_HEADER_COLOR, paddingHorizontal: pxToDp(40), fontSize: pxToSp(28)
      }
    },
  ]);

  const [inputValue, setinputValue] = useState('');
  const onChangeSearch = (query: string) => {

    setinputValue(query)
  }

  const connector = useWalletConnect(); // valid
  const { walletInfo, sendReduxAction } = useWalletInfo();

  const connectThis = () => {
    sendReduxAction(ReduxToken.SET_WalletINFO, { walletInfo: { 'address': '0x11133323331' } });
    connector.connect()
  }
  const showButton = () => {
    if (!connector.connected) {
      /**
       *  Connect! 🎉
       */
      return <Ripple
        style={{
          height: 100,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }} onPress={() => connectThis()}><Text>Connect mea</Text></Ripple>
    }
    else {

      return (<Ripple style={{
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }} onPress={() => connector.killSession()}><Text>Kill Session</Text><Text>{walletInfo?.address}</Text></Ripple>)
    }
  }

  return (
    <View
      style={styles.container}
    >
      <View style={styles.header_wraps}>

        <Searchbar
          placeholder="搜索"
          onChangeText={(query) => { onChangeSearch(query) }}
          onEndEditing={() => { Navigate.navigate('Search', {}) }}
          value={inputValue}
          icon={require('@/resources/home/Search.png')}
          style={styles.search_wraps}
          inputStyle={styles.search_input}
          selectionColor={UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE}
        />

          <DropDownPicker
            style={{ borderWidth: 0, borderBottomWidth: pxToDp(1), borderBottomColor: UIELEMENTS.DEFAULT_SEPARATOR_COLOR}}
            labelStyle={{ color: UIELEMENTS.DEFAULT_HEADER_COLOR, fontSize: pxToSp(28), paddingHorizontal: pxToDp(40) }}
            placeholder="排序规则"
            placeholderStyle={{ paddingHorizontal: pxToDp(40), fontSize: pxToSp(28) }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            dropDownContainerStyle={{ borderColor: 'white' }}
            modalTitleStyle={{ borderColor: 'white' }}
            ArrowUpIconComponent={({ style }) => <Image style={styles.arrowStyle} source={require('@/resources/home/return_up.png')} />}
            ArrowDownIconComponent={({ style }) => <Image style={styles.arrowStyle} source={require('@/resources/home/return.png')} />}
            TickIconComponent={({ style }) => <Image style={styles.chooseStyle} source={require('@/resources/home/choose.png')} />}
          />

      </View>
    </View>
  );
};

export default Market;

function payload(SET_TABNAVCHANGE: string, payload: any, arg2: { title: string; headerTitleAlign: string; }) {
  throw new Error("Function not implemented.");
}
