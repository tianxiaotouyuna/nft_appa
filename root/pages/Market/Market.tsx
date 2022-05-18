import React, { FunctionComponent, useEffect, useRef, useState } from "react";
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
import DropDownPicker from "react-native-dropdown-picker";
import { color } from "react-native-reanimated";
import { pxToDp, pxToSp } from "@/utils/system";
import { LargeList } from "react-native-largelist";
import {
  ChineseNormalFooter,
  ChineseNormalHeader,
  ChineseWithLastDateHeader,
} from "react-native-spring-scrollview/Customize";
import BannerCard, { CardStyle } from "@/components/BannerCard/BannerCard";
import { black } from "react-native-paper/lib/typescript/styles/colors";
const Market: FunctionComponent = () => {
  const listRef = useRef<LargeList>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [allLoaded, setallLoaded] = useState(false);
  const [items, setItems] = useState([
    {
      label: "价格从高到低",
      value: "价格从高到低",
      labelStyle: {
        color: UIELEMENTS.DEFAULT_HEADER_COLOR,
        paddingHorizontal: pxToDp(40),
        fontSize: pxToSp(28),
      },
    },
    {
      label: "价格从低到高",
      value: "价格从低到高",
      labelStyle: {
        color: UIELEMENTS.DEFAULT_HEADER_COLOR,
        paddingHorizontal: pxToDp(40),
        fontSize: pxToSp(28),
      },
    },
  ]);

  const [data, setdata] = useState([]);
  const [section, setsection] = useState(3);
  const [rowCount, setrowCount] = useState(3);
  for (let section = 0; section < 3; ++section) {
    const sContent = { items: [1] };
    for (let row = 0; row < rowCount; ++row) {
      sContent.items.push(row);
    }
    data.push(sContent);
  }
  const [inputValue, setinputValue] = useState("");
  const onChangeSearch = (query: string) => {
    setinputValue(query);
  };

  const connector = useWalletConnect(); // valid
  const { walletInfo, sendReduxAction } = useWalletInfo();

  const connectThis = () => {
    sendReduxAction(ReduxToken.SET_WalletINFO, {
      walletInfo: { address: "0x11133323331" },
    });
    connector.connect();
  };
  const showButton = () => {
    if (!connector.connected) {
      /**
       *  Connect! 🎉
       */
      return (
        <Ripple
          style={{
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
          }}
          onPress={() => connectThis()}
        >
          <Text>Connect mea</Text>
        </Ripple>
      );
    } else {
      return (
        <Ripple
          style={{
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
          }}
          onPress={() => connector.killSession()}
        >
          <Text>Kill Session</Text>
          <Text>{walletInfo?.address}</Text>
        </Ripple>
      );
    }
  };
  const renderSection = () => {
    return <Text>123</Text>;
  };
  const renderIndexPath = () => {
    return (
      <BannerCard
        data={{
          thumb:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.11467.com%2F2021%2F09-04%2F3477865343.jpg&refer=http%3A%2F%2Fimg.11467.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1655400210&t=5185900885f6af72df52c17a32aa9e2c",
          name: "NFT藏品",
        }}
        cardStyle={CardStyle.PUBLISH_STYLE}
      ></BannerCard>
    );
  };
  // const renderSection = (section: number) => {
  //   return (
  //     <View style={styles.section}>
  //       <Text>
  //         Section {section}
  //       </Text>
  //     </View>
  //   );
  // };

  // const renderIndexPath = ({ section: section, row: row }) => {
  //   return (
  //     <View style={styles.row}>
  //       <Text>
  //         Section {section} Row {row}
  //       </Text>
  //       <View style={styles.line} />
  //     </View>
  //   );
  // };
  return (
    <View style={styles.container}>
      <View style={styles.header_wraps}>
        <View style={styles.search_wraps2}>
          <Searchbar
            placeholder="搜索"
            onChangeText={(query) => {
              onChangeSearch(query);
            }}
            onEndEditing={() => {
              Navigate.navigate("Search", {});
            }}
            value={inputValue}
            icon={require("@/resources/home/Search.png")}
            style={styles.search_wraps}
            inputStyle={styles.search_input}
            selectionColor={UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE}
          />
        </View>
        <View style={Platform.OS === 'ios' ? {zIndex: 100} : {}}>
          <DropDownPicker
            style={{
              borderWidth: 0,
              borderBottomWidth: pxToDp(1),
              borderBottomColor: UIELEMENTS.DEFAULT_SEPARATOR_COLOR,
            }}
            modalProps={{
              animationType: "fade",
            }}
            labelStyle={{
              color: UIELEMENTS.DEFAULT_HEADER_COLOR,
              fontSize: pxToSp(28),
              paddingHorizontal: pxToDp(40),
            }}
            placeholder="排序规则"
            placeholderStyle={{
              paddingHorizontal: pxToDp(40),
              fontSize: pxToSp(28),
            }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            dropDownContainerStyle={{ borderColor: "white" }}
            modalTitleStyle={{ borderColor: "white" }}
            ArrowUpIconComponent={({ style }) => (
              <Image
                style={styles.arrowStyle}
                source={require("@/resources/home/return_up.png")}
              />
            )}
            ArrowDownIconComponent={({ style }) => (
              <Image
                style={styles.arrowStyle}
                source={require("@/resources/home/return.png")}
              />
            )}
            TickIconComponent={({ style }) => (
              <Image
                style={styles.chooseStyle}
                source={require("@/resources/home/choose.png")}
              />
            )}
          />
      </View>
      </View>

      <LargeList
        ref={listRef}
        style={styles.list}
        data={data}
        showsVerticalScrollIndicator={false}
        // heightForSection={() => 50}
        // renderSection={renderSection}
        heightForIndexPath={() => 150}
        renderIndexPath={renderIndexPath}
        // refreshHeader={ChineseNormalHeader}
        // onRefresh={() => {
        //   setTimeout(() => {
        //     listRef.current?.endRefresh();
        //     // setTimeout(()=>this.setState({prop:"your changed props"}));
        //   }, 2000);
        // }}
        loadingFooter={ChineseNormalFooter}
        allLoaded={allLoaded}
        onLoading={() => {
          setTimeout(() => {
            listRef.current?.endLoading();
            setallLoaded(false);
          }, 2000);
        }}
      />
    </View>
  );
};

export default Market;

function payload(
  SET_TABNAVCHANGE: string,
  payload: any,
  arg2: { title: string; headerTitleAlign: string }
) {
  throw new Error("Function not implemented.");
}
