import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import storage from '../../../Services/storage'
import api from '../../../Services/api'
import Loading from '../../Loading'

export default function Login({ navigation }) {
    const [tenantId, setTenantId] = useState('')
    const [loading, setLoading] = useState(true)
    const [email, setEmail] = useState('owner@owner.com')
    const [password, setPassword] = useState('owner')

    useEffect(() => {
        const init = async () => {
            let user = await storage.get("user")
            user = JSON.parse(user)
            setTenantId(String(user.tenant_id))
            setLoading(false)
        }
        init()
    }, [])

    const changeSchool = async () => {
        await storage.remove('user')
        return navigation.navigate('SetSchool')
    }

    const login = async () => {
        setLoading(true)
        api.post('/login', { tenant_id: tenantId, email, password }).then(res => {
            let user = res.data
            if (!user) return Alert.alert("Erro", "Erro ao efetuar login")
            else {
                storage.set("user", JSON.stringify(user))
                api.defaults.headers.common['Authorization'] = user.api_token
                navigation.navigate("Home")
            }
            setLoading(false)
        }).catch(er => {
            console.log(er.response)
            setLoading(false)
            return Alert.alert("Erro", "Erro ao efetuar login")
        })
    }

    if (loading) return <Loading />
    return (
        <View>
            <Text onPress={() => changeSchool()}>Mudar de Escola</Text>
            <Text>{tenantId}</Text>
            <Text>{email}</Text>
            <Text>{password}</Text>
            <TouchableOpacity onPress={() => login()}>
                <Text>Logar</Text>
            </TouchableOpacity>
        </View>
    )
}