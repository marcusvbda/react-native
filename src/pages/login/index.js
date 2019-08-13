import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native'

class Login extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return  <View style={{ flex: 1, justifyContent:'center',alignItems:'center'}}>
                    <Button
                        style={{ marginTop: 20 }}
                        onPress={() => this.props.data.setPage('_HOME_')}
                        title="Home"
                        color="#841584"
                    />
                    <Text>{this.props.data.text}</Text>
                </View>
    }
}

export default Login
