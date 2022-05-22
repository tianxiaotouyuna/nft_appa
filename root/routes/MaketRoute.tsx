import Market from "@/pages/Market/Market";
import { createStackNavigator } from "@react-navigation/stack";
import { Route } from "../utils";
import React, { FunctionComponent } from 'react'

const ScreenStack = createStackNavigator();

const MaketRoute: FunctionComponent = () => {
    return (
        <ScreenStack.Navigator>
            <ScreenStack.Screen name={' '} component={Market} options={{
            headerShown:true
            }}/>
        </ScreenStack.Navigator>
    )
}

export default MaketRoute