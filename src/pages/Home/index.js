import React, { useEffect, useState } from 'react'
import { View, Button, Alert, Text } from 'react-native'
import Auth from '../../services/auth'
import AsyncStorage from '@react-native-community/async-storage'
import Loading from '../Loading'

export default function Home({ navigation }) {
    const [user, setUser] = useState("")

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user) setUser(user)
        })
    }, [])

    const logout = () => {
        Alert.alert('Confirmação', 'Deseja efetuar logout ?', [{
            text: 'Não',
            onPress: () => false,
            style: 'cancel',
        },
        {
            text: 'Sim',
            onPress: async () => await Auth.logout(navigation)
        },
        ]);
    }
    if (!user) return <Loading />
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>{user}</Text>
            <Button title="Logout" onPress={logout}></Button>
        </View>
    )
}