import React, { Fragment, FunctionComponent } from "react";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator, Header, HeaderBackButton} from "@react-navigation/stack";
import { Navigate, Route, Storage } from "../utils";
import { Tab } from "./Tab";
import Search from "@/pages/Home/Search";
import { Alert, Image, StyleSheet, View } from "react-native";
import NtfDetail from "@/pages/Market/NtfDetail";
import { Text } from "react-native-paper";
import { pxToDp } from "@/utils/system";
export const Nav: FunctionComponent = () => {
  const RootStack = createStackNavigator();
  const configNavs = () => {
    return (
      <NavigationContainer ref={Navigate.navigationRef} >
        <RootStack.Navigator>
          <Fragment>
            <RootStack.Screen
              name="首页"
              component={Tab}
              options={({ route }) => ({
                headerTitle: getFocusedRouteNameFromRoute(route),
                headerTransparent:getFocusedRouteNameFromRoute(route) =='资产'?true:false 
            })}
            />
            <RootStack.Screen name="Search" component={Search} />
            <RootStack.Screen name="NtfDetail" component={NtfDetail }  
         
            />
          </Fragment>
        </RootStack.Navigator>
      </NavigationContainer>
    );
  };

  return configNavs();
};
