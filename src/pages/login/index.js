import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native'
import Styles from "../default/styles"

class Login extends Component {
    constructor(props) {
        super(props)
        console.log(this.props.navigation.state.params)
    }
    
    render() {
		const {navigate} = this.props.navigation;
        return  <View style={Styles.xy_center}>
                    <Button
                        onPress={() => navigate('Home')}
                        title="Voltar para Home"
                        color="#841584"
                    />
                </View>
    }
}

export default Login
