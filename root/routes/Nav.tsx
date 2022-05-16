import React, { Fragment, FunctionComponent } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Navigate, Route, Storage } from "../utils";
import { Tab } from './Tab'
import Search from '@/pages/Home/Search';
import Screens from './Screens';
export const Nav: FunctionComponent = () => {

const RootStack = createStackNavigator();


const configNavs=()=>{
		return (
        <NavigationContainer
            ref={Navigate.navigationRef}
        >
            <RootStack.Navigator>
                    <Fragment>
                        <RootStack.Screen name="Tab" component={Tab} />
                        <RootStack.Screen name="Search" component={Search}  />
                    </Fragment>

            </RootStack.Navigator>
        </NavigationContainer>
		)
	}

return (
    configNavs())
}
