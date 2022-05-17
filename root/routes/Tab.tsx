import React, { Fragment, FunctionComponent } from 'react'
import { AnimatedTabBarNavigator, DotSize } from 'react-native-animated-nav-tab-bar'
import Icon from 'react-native-vector-icons/Feather'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@/pages/Home/Home'
import Market from '@/pages/Market/Market'
import Order from '@/pages/Order/Order'
import Asset from '@/pages/Asset/Asset'
import useInitScreen from '@/hooks/useInitScreen'
import { Alert, Image, Pressable } from 'react-native'
import styles from '@/styles/pages/home/home';
import { Navigate } from '../utils';
import { UIELEMENTS } from '../constants';
import useInitScreen_tab from '@/hooks/useInitScreen_tab';
export const Tab: FunctionComponent = () => {

	const Tabs = AnimatedTabBarNavigator()
	const RootStack = createStackNavigator();


	const {options}=useInitScreen_tab()
	console.log('======'+JSON.stringify(options))
	// useInitScreen(options||
	// 	{
	// 		navigationOptions: {
	// 			title:'首页',
	// 			headerRight: () => (
	// 				<Pressable onPress={() => { Navigate.navigate('Search', {}) }}>
	// 					<Image style={styles.tab_right} source={require('@/resources/home/more.png')} />
	// 				</Pressable>
	// 			),
	// 			headerTitleAlign:'left'
	// 		},
	// 		statusBar: {
	// 			backgroundColor: "transparent",
	// 			barStyle: "light-content"
	// 		}
	// 	}
	// 	)
	
	const TabBarIcon = (props: any) => {
		return (
			<Icon
				name={props.name}
				size={props.size ? props.size : 24}
				color={props.tintColor}
			/>
		)
	}

	const configTabs = () => {
		return (
			<Tabs.Navigator initialRouteName="Home"
				tabBarOptions={{
					activeTintColor: UIELEMENTS.DEFAULT_HEADER_COLOR_ACTIVE,
					inactiveTintColor: UIELEMENTS.DEFAULT_HEADER_COLOR,
					activeBackgroundColor: "rgba(51,82,219,0.08)",
				}}
				appearance={{
					shadow: true,
					floating: true,//是否悬浮
					dotSize: DotSize.SMALL
				}}
			>
				<Tabs.Screen
					name="首页"
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
					name="市场"
					component={Market}
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
					name="订单"
					component={Order}
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
					name="资产"
					component={Asset}
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
		configTabs()
	)
}
