
import { assign } from 'lodash'
import React, { useEffect } from 'react'
import { View, Text, StatusBarProps, StatusBar } from 'react-native'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import useNavigationListener from './useNavigationListener'
import { StackNavigationOptions } from '@react-navigation/stack'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import useNavigationOptions from './useNavigationOptions'
import useStatusBar from './useStatusBar'

type Options = {
    navigationBarColor?: String
    statusBar?: StatusBarProps
    navigationOptions?: StackNavigationOptions
}

const useInitScreen = (options: Options = {}) => {

    const {
        navigationBarColor = "#ffffff",
    } = options;

    const navigationReturns = useNavigationOptions(options.navigationOptions);
    useStatusBar(options.statusBar);

    useNavigationListener({
        onFocus: () => {
            initAndroidNavigation();
        }
    })

    const initAndroidNavigation = () => {
        changeNavigationBarColor(navigationBarColor, true, true);
    }

    return { ...navigationReturns }

}

export default useInitScreen
