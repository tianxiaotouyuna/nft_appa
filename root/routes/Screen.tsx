import Asset from "@/pages/Asset/Asset";
import Market from "@/pages/Market/Market";
import Order from "@/pages/Order/Order";
import { createStackNavigator } from "@react-navigation/stack";
import { Route } from "../utils";
import { Tab } from "./Tab";
import React, { FunctionComponent } from 'react'
import LoginOut from "@/pages/Asset/LoginOut";
import Search from "@/pages/Home/Search";
import NtfDetail from "@/pages/Market/NtfDetail";
import Buy from "@/pages/Market/Buy/Buy";
import Sell from "@/pages/Asset/Sell/Sell";

const ScreenStack = createStackNavigator();

const Screen: FunctionComponent = () => {
    return (
        <ScreenStack.Navigator>
            <ScreenStack.Screen name={Route.SCREEN.Tab} component={Tab} options={{ headerShown: false }} />
            <ScreenStack.Screen name={Route.SCREEN.LoginOut} component={LoginOut}/>
            <ScreenStack.Screen name={Route.SCREEN.Search} component={Search}/>
            <ScreenStack.Screen name={Route.SCREEN.Market} component={Market}/>
            <ScreenStack.Screen name={Route.SCREEN.NtfDetail} component={NtfDetail}  options={{ title: ' ' }}/>
            <ScreenStack.Screen name={Route.SCREEN.Buy} component={Buy}/>
            <ScreenStack.Screen name={Route.SCREEN.Sell} component={Sell}/>

        </ScreenStack.Navigator>
    )
}

export default Screen