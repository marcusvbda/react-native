import React, { useState, useEffect } from 'react'
import { View, Button, Alert, Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

export default function Home({ navigation }) {
    const [user, setUser] = useState("")
    const [userId, setUserId] = useState("")
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const init = async () => {
            setUser(await AsyncStorage.getItem("user"))
            setUserId(await AsyncStorage.getItem("user_id"))
            setVisible(true)
        }
        init()
    }, [])

    const logout = () => {
        Alert.alert('Confirmação', 'Deseja efetuar logout ?', [{
            text: 'Não',
            onPress: () => false,
            style: 'cancel',
        },
        {
            text: 'Sim',
            onPress: async () => {
                AsyncStorage.removeItem("user")
                return navigation.navigate('Login')
            }
        },])
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ShimmerPlaceHolder autoRun={true} visible={visible}>
                <Text>{userId}</Text>
            </ShimmerPlaceHolder>
            <ShimmerPlaceHolder autoRun={true} visible={visible} style={{ marginTop: 10, marginBottom: 10 }}>
                <Text style={{ marginTop: 10, marginBottom: 10 }}>{user}</Text>
            </ShimmerPlaceHolder>
            <Button title="Logout" onPress={logout}></Button>
        </View>
    )
}