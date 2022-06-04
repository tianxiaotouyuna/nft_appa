import React, { FunctionComponent, useState } from "react";
import { View, Button, Platform, Alert, ImageStore, Pressable, Image, Text } from "react-native";

import { useWalletConnect } from "@walletconnect/react-native-dapp";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/styles/pages/asset/loginout";
import { walletActions } from "@/action/walletActions";
import { wallet } from "@/reducers/walletReducer";
import NtfButton from "@/components/NtfButton/NtfButton";
import { pxToDp } from "@/utils/system";
import useNavigationOptions from "@/hooks/useNavigationOptions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UIELEMENTS } from "@/constants/index";
import GDataList from "@/components/GDataList";
import { OrderService } from "@/services/index";
import BannerCard, { CardStyle } from "@/components/BannerCard/BannerCard";
import OrderCard from "@/components/OrderCard/OrderCard";
type OrderListProps = {
  type?: number
  [key: string]: any
}

const OrderList: FunctionComponent<OrderListProps> = (props) => {
  const dispatch = useDispatch();
  const connector = useWalletConnect(); // valid
  const {type}=props;
  const login = () => {
    dispatch(walletActions.connect(connector));
  };

  const emptyView = () => {
    return (
      <View style={{  flex: 1,justifyContent:"center" }}>
        <View style={{alignItems: "center"}}>
          <Image
            style={styles.btn_icon}
            source={require("@/resources/nolinkedwallet.png")}
          />
          <Text style={styles.btn_text}>您还没有相应订单</Text>
        </View>
      </View>
    )
  }
  const renderItem = ({ item, index }: any) => {
    return (
      <OrderCard
        data={item}
        cardStyle={type}
      ></OrderCard>
    );
  };
  const renderView = () => {
    return (
      <GDataList
      style={{width:
  '100%'}}
        requestMethod={OrderService.selectOfferList}
        requestParams={{path:'',params:{type:type,accountAddress:'0x71190f09775a2af79c1ce08fc9d3a58352f89155'}}}
        defaultPageSize={10}
        noDeaultPageName={true}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: pxToDp(20) }}></View>}
        ListEmptyComponent={() => (
          emptyView()
        )}
      />
    )
  }
  return (
    <View style={[styles.container, { marginBottom: 100 + useSafeAreaInsets().bottom }, { alignItems: "center", justifyContent: "center" }]}>
        {renderView()}
      {/* {connector.connected ?
        renderView() :
        <View style={{ justifyContent: "center", alignItems: "center" }}>

          <Image
            style={styles.btn_icon}
            source={require("@/resources/nolinkedwallet.png")}
          />

          <NtfButton
            heigh={pxToDp(100)}
            width={pxToDp(400)}
            onPress={login}
            backgroundColor={UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE}
            textColor='white'
            text={"链接钱包"}
            borderRadius={pxToDp(12)}
            style={{ marginTop: pxToDp(160), marginHorizontal: pxToDp(160) }}
          />
        </View>
      } */}
    </View>
  );
};

export default OrderList;

