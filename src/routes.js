import HomeScreen from './pages/home/index'
import LoginScreen from './pages/login/index'

import { createAppContainer, createStackNavigator } from 'react-navigation';

const Routes = createAppContainer(
	createStackNavigator({
		Home: {
			screen : HomeScreen,
			navigationOptions: ({ navigation }) => ({
				title: "Home",
				visible : false,
				params : {test : "lorem ispum"},
				header : null
			})
		},
		Login: {
			screen : LoginScreen,
			navigationOptions: ({ navigation }) => ({
				title: "Login",
				visible : false,
				params : {test : "lorem ispum"},
				header : null
			})
		},
	})
);

export default Routes;