import React, { useState, useEffect } from 'react'
import { View, Button, Alert, Text } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Loading from '../Loading'

export default function Home({ navigation }) {
    const [user, setUser] = useState("")

    useEffect(() => {
        AsyncStorage.getItem("user").then(user => {
            user = JSON.parse(user)
            setUser(user.email)
        })
    }, [])

    const isloading = () => {
        return !user
    }

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

    if (isloading()) return <Loading />
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>{user}</Text>
            <Button title="Logout" onPress={logout}></Button>
        </View>
    )
}