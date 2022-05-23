import React, { Fragment, FunctionComponent, useEffect, useState } from 'react'
import { AnimatedTabBarNavigator, DotSize } from 'react-native-animated-nav-tab-bar'
import Icon from 'react-native-vector-icons/Feather'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@/pages/Home/Home'
import Market from '@/pages/Market/Market'
import Order from '@/pages/Order/Order'
import Asset from '@/pages/Asset/Asset'
import useInitScreen from '@/hooks/useInitScreen'
import { Alert, Image, Pressable, TouchableOpacity } from 'react-native'
import styles from '@/styles/pages/home/home';
import { Navigate } from '../utils';
import { UIELEMENTS } from '../constants';
import NtfDetail from '@/pages/Market/NtfDetail';
import { title } from 'process';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import MaketRoute from './MaketRoute';
import HomeRoute from './HomeRoute';
import OrderRoute from './OrderRoute';
import AssetRoute from './AssetRoute';
 'src/screens/ArtistScreen';
export const Tab: FunctionComponent = ({ navigation, route }) => {
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

	const configTabs = () => {
		return (
			<Tabs.Navigator 
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
					component={HomeRoute}
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
					component={MaketRoute}
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
					component={OrderRoute}
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
					component={AssetRoute}
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
