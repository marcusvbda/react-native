import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native'

class Home extends Component {
	constructor(props) {
		super(props)
	}

	test = () => {
		let values = this.props.data
		values.text = "lorem lorem lorem"
		this.props.data.updateState(values)
		this.props.data.setPage("_LOGIN_")
	}

	render() {
		return 	<View style={{ flex: 1, justifyContent:'center',alignItems:'center'}}>
					<Button
						style={{ marginTop: 20 }}
						onPress={() => this.test() }
						title="Voltar"
						color="#b21111"
					/>
                    <Text>{this.props.data.text}</Text>
				</View>
	}
}

export default Home


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
