import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import storage from '../../../Services/storage'
import api from '../../../Services/api'
import Loading from '../../Loading'
import {
    Container,
    Title
} from './styles'

export default function SetSchool({ navigation }) {
    const [loading, setLoading] = useState(true)
    const [tenants, setTenants] = useState([])

    useEffect(() => {
        const init = async () => {
            let user = await storage.get("user")
            await loadTenants()
        }
        init()
    }, [])

    const setTenantId = async (id) => {
        await storage.set("user", JSON.stringify({ tenant_id: id }))
        return navigation.navigate("Login")
    }

    const loadTenants = async () => {
        api.get("schools").then(res => {
            if (!res.data) return Alert.alert("Erro", "Erro ao carregar escolas")
            else setTenants(res.data)
            setLoading(false)
        }).catch(er => {
            setLoading(false)
            console.log(er.response)
        })
    }

    if (loading) return <Loading />
    return (
        <View>
            {
                tenants.map(t => {
                    return (
                        <TouchableOpacity style={{ marginTop: 10 }} key={t.id} onPress={() => setTenantId(t.id)}>
                            <Container>
                                <Title>{`Escolha escola ${t.id}`}</Title>
                            </Container>
                        </TouchableOpacity>)
                })
            }
        </View>
    )
}
