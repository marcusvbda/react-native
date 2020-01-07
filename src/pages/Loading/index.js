import React from 'react'
import { View, Text, Image } from 'react-native'
import logo from '../../../assets/imgs/logo.png'

export default function Loading() {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Image source={logo} />
            <Text>Loading</Text>
        </View>
    )
}