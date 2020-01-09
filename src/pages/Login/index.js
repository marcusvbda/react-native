import React, { useState, useEffect } from 'react'
import { View, Image, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import styles from './styles'
import global_styles from '../../global_styles'
import logo from '../../../assets/imgs/logo.png'
import { TextInput } from 'react-native-gesture-handler'
import { Alert } from 'react-native'
import api from '../Services/api'
import Loading from '../Loading'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('admin@admin.com')
    const [password, setPassword] = useState('admin')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const checkAuth = async () => {
            let user = await AsyncStorage.getItem("user")
            if (user) return navigation.navigate('Home')
        }
        checkAuth()
    }, [])

    const submit = () => {
        if ((!email) || (!password)) return Alert.alert("Erro", "Preencha os campos")
        setLoading(true)
        let credentials = `Basic ${btoa(email + ':' + password)}`
        api.defaults.headers.common['Authorization'] = credentials
        api.post('/app/login', {}).then(async (res) => {
            let user = res.data
            if (user) {
                await AsyncStorage.setItem("user", user.name)
                await AsyncStorage.setItem("user_id", String(user.id))
                navigation.navigate('Home')

            }
            setLoading(false)
        }).catch(er => {
            console.log(er)
            setLoading(false)
        })
    }

    if (loading) return <Loading />
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : null}
            style={global_styles.body}
        >
            <View style={global_styles.card}>
                <View style={global_styles.container}>
                    <Image style={styles.logo} source={logo} />
                    <Text style={global_styles.title}>Bem-Vindo de Volta!</Text>
                    <Text style={global_styles.subtitle}>Fico Feliz em ve-lo novamente!</Text>
                    <Text style={global_styles.input_label}>SEU E-EMAIL *</Text>
                    <TextInput style={global_styles.input}
                        placeholder="Seu E-mail"
                        keyboardType="email-address"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <Text style={global_styles.input_label}>SUA SENHA *</Text>
                    <TextInput style={global_styles.input}
                        placeholder="Sua Senha"
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity style={global_styles.btn} onPress={submit}>
                        <Text style={global_styles.text_white}>Login</Text>
                    </TouchableOpacity>
                    <Text style={global_styles.link} onPress={() => alert('cadastro')}>Não Possui Conta ?</Text>
                </View>
            </View>
        </KeyboardAvoidingView >
    )
}
