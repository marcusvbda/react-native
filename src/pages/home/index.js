import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native'
class Home extends Component {
	constructor(props) {
		super(props)
	}


	render() {
		const {navigate} = this.props.navigation;
		return 	<View style={{ flex: 1, justifyContent:'center',alignItems:'center'}}>
					<Button
						onPress={() => navigate('Login',{User: {name: 'john doe', age: 27}})}
						title="Ir para Login"
						color="#b21111"
					/>
				</View>
	}
}

export default Home

