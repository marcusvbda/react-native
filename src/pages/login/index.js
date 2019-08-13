import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native'
import Styles from "../default/styles"

class Login extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return  <View style={Styles.xy_center}>
                    <Button
                        onPress={() => this.props.data.setPage('_HOME_')}
                        title="Home"
                        color="#841584"
                    />
                    <Text>{this.props.data.text}</Text>
                </View>
    }
}

export default Login
