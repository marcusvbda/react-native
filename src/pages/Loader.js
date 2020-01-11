import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import storage from '../Services/storage'
import Loading from './Loading'

export default function Loader({ navigation }) {

    useEffect(() => {
        const init = async () => {
            let user = await storage.get("user")
            if (!user) return navigation.navigate("SetSchool")
            user = JSON.parse(user)
            if (!user.api_token) return navigation.navigate("Login")
            return navigation.navigate("Home")
        }
        init()
    }, [])

    return <Loading />
}