import React, { Fragment, FunctionComponent } from 'react'
import { AnimatedTabBarNavigator, DotSize } from 'react-native-animated-nav-tab-bar'
import Icon from 'react-native-vector-icons/Feather'
import Home from '@/pages/Home/Home'
import { createStackNavigator } from '@react-navigation/stack';
import Wallet from '@/pages/Wallet/Wallet'
import useInitScreen from '@/hooks/useInitScreen'
import { Image, Pressable } from 'react-native'
import styles from '@/styles/pages/home/home';
import { Navigate } from '../utils';
export const Tab: FunctionComponent = () => {

	const Tabs = AnimatedTabBarNavigator()
	const RootStack = createStackNavigator();
	useInitScreen({
		navigationOptions: {
			title: '首页',
			headerRight: () => (
				<Pressable onPress={() => { Navigate.navigate('Search', {}) }}>
					<Image style={styles.tab_right} source={require('@/resources/home/more.png')} />
				</Pressable>
			),
			headerTitleAlign:'left'
		},
		statusBar: {
			backgroundColor: "transparent",
			barStyle: "light-content"
		}
	})
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
					name="订单"
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
					name="资产"
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
		configTabs()
	)
}
