import React, { FunctionComponent } from 'react'
import { AnimatedTabBarNavigator, DotSize } from 'react-native-animated-nav-tab-bar'
import Icon from 'react-native-vector-icons/Feather'
import { NavigationContainer } from '@react-navigation/native'
import Home from '@/pages/Home/Home'
import Wallet from '@/pages/Wallet/Wallet'
export const RootRoutes: FunctionComponent = () => {

const Tabs = AnimatedTabBarNavigator()

const TabBarIcon = (props: any) => {
	return (
		<Icon
			name={props.name}
			size={props.size ? props.size : 24}
			color={props.tintColor}
		/>
	)
}

const configTabs=()=>{
    return(
        <Tabs.Navigator initialRouteName="Home"
		tabBarOptions={{
			activeTintColor: "#ffffff",
			inactiveTintColor: "#223322",
			activeBackgroundColor: "red",
			
		}}
		appearance={{
			shadow: true,
			// floating: true,//是否悬浮
			floating: false,//
			dotSize: DotSize.SMALL
		}}
	>
		<Tabs.Screen
			name="Home"
			component={Home}
			options={{
				tabBarIcon: ({ focused, color }) => (
					<TabBarIcon
						focused={focused}
						tintColor={color}
						name="home"
					/>
				),
			}}
		/>
		<Tabs.Screen
			name="Wallet"
			component={Wallet}
			options={{
				tabBarIcon: ({ focused, color }) => (
					<TabBarIcon
						focused={focused}
						tintColor={color}
						name="search"
					/>
				),
			}}
		/>
		<Tabs.Screen
			name="Images"
			component={Home}
			options={{
				tabBarIcon: ({ focused, color }) => (
					<TabBarIcon
						focused={focused}
						tintColor={color}
						name="image"
					/>
				),
			}}
		/>
		<Tabs.Screen
			name="Profile"
			component={Home}
			options={{
				tabBarIcon: ({ focused, color }) => (
					<TabBarIcon
						focused={focused}
						tintColor={color}
						name="user"
					/>
				),
			}}
		/>
	</Tabs.Navigator>
    )
}

return (
    <NavigationContainer>
        {configTabs()}
    </NavigationContainer>)
}
