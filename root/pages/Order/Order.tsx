import React, { FunctionComponent, useState } from "react";
import { Alert, TouchableHighlight, View } from "react-native";

import { useWalletConnect } from "@walletconnect/react-native-dapp";
import Ripple from "react-native-material-ripple";
import { Text } from "react-native-paper";
import {UIELEMENTS } from "@/constants/index";
import styles from "@/styles/pages/order/order";
import useInitScreen from "@/hooks/useInitScreen";
import { useDispatch } from "react-redux";
import { walletActions } from "@/action/walletActions";
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Market from "../Market/Market";
import NFTDefaultTabBar from "./NFTDefaultTabBar";
import { pxToDp, pxToSp } from "@/utils/system";
import OrderList from "./OrderList/OrderList";
const Order: FunctionComponent = () => {
  useInitScreen({
    navigationOptions: {
      title:'订单',
      headerTitleAlign: "left",
    },
    statusBar: {
      backgroundColor: "transparent",
      barStyle: "light-content",
    },
  });

 const renderTab = (name, page, isTabActive, onPressHandler, onLayoutHandler) => {
    return (
      <TouchableHighlight
        key={`${name}_${page}`}
        onPress={() => onPressHandler(page)}
        onLayout={onLayoutHandler}
        style={{ flex: 1, width: 100 }}
        underlayColor="#aaaaaa"
      >
        <Text>{name}</Text>
      </TouchableHighlight>
    );
  }
  const handleChangeTab=()=>{

  }
const showScrollBar=()=>{
  return(
    <ScrollableTabView
      style={styles.container}
      onChangeTab={handleChangeTab}
      renderTabBar={() => <NFTDefaultTabBar  activeTextColor={UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE} inactiveTextColor={'#383838'} textStyle={{fontSize:pxToSp(28)}}/>}
    >
        <OrderList tabLabel='我的出价'></OrderList>
        <OrderList tabLabel='收到的出价'></OrderList>
        <OrderList tabLabel='挂单'></OrderList>
        <OrderList tabLabel='成交'></OrderList>
      </ScrollableTabView>
  )
}
  return (
    showScrollBar()

      
  );
};

export default Order;