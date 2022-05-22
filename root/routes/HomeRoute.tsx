import { createStackNavigator } from "@react-navigation/stack";
import { Route } from "../utils";
import React, { FunctionComponent } from 'react'
import Home from "@/pages/Home/Home";

const ScreenStack = createStackNavigator();

const HomeRoute: FunctionComponent = () => {
    return (
        <ScreenStack.Navigator>
            <ScreenStack.Screen name={' '} component={Home} options={{
            headerShown:true
            }}/>
        </ScreenStack.Navigator>
    )
}

export default HomeRoute