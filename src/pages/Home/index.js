import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import storage from '../../Services/storage'
import api from '../../Services/api'
import Loading from '../Loading'

export default function Home({ navigation }) {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const init = async () => {
            api.get("/courses").then(res => {
                if (!res.data) return Alert.alert("Erro", "Erro ao carregar cursos")
                else setCourses(res.data)
                setLoading(false)
            }).catch(er => {
                console.log(er.response)
                Alert.alert("Erro", "Erro ao carregar cursos")
                setLoading(false)
            })
        }
        init()
    }, [])

    const logout = async () => {
        await storage.remove("user")
        return navigation.navigate("Loader")
    }

    if (loading) return <Loading />
    return (
        <View>
            <TouchableOpacity onPress={() => logout()}><Text>Sair</Text></TouchableOpacity>
            {
                courses.map(c => <Text key={c.id} style={{ marginTop: 10 }} >{c.name}</Text>)
            }
        </View>
    )
}