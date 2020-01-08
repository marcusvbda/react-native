import React, { useState, useEffect } from 'react'
import { View, Image, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import Loading from '../Loading'
import styles from './styles'
import global_styles from '../../global_styles'
import logo from '../../../assets/imgs/logo.png'
import { TextInput } from 'react-native-gesture-handler'
import Auth from '../../services/auth'

export default function Login({ navigation }) {
    const [created, setCreated] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        Auth.check(navigation)
        setCreated(true)
    }, [])

    const submit = async () => {
        await Auth.fakeLogin(email, password, navigation)
    }

    if (!created) return <Loading />
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
        </KeyboardAvoidingView>
    )
}
