import React, { Fragment, FunctionComponent } from "react";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Navigate, Route, Storage } from "../utils";
import { Tab } from "./Tab";
import Search from "@/pages/Home/Search";
import { Alert } from "react-native";
import NtfDetail from "@/pages/Market/NtfDetail";
import LoginOut from "@/pages/Asset/LoginOut";
import ScreenRoutes from "@/routes/Screen";
import Screen from "@/routes/Screen";
export const Nav: FunctionComponent = () => {
  const RootStack = createStackNavigator();

  const configNavs = () => {
    return (
      <NavigationContainer ref={Navigate.navigationRef}>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Screen"
            component={Screen}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    );
  };

  return configNavs();
};
