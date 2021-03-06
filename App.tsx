import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigation from './root/navigation/AppNavigation'

import React from 'react'

const App = () => {
	return (
		<NavigationContainer>
			<AppNavigation />
		</NavigationContainer>
	)
}

export default App
