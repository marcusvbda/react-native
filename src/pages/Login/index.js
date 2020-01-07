import React, { useState, useEffect } from 'react'
import { View, Image, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles'
import logo from '../../../assets/imgs/logo.png'
import { TextInput } from 'react-native-gesture-handler'
import Auth from '../../services/auth'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => Auth.check(navigation), [])

    const submit = async () => {
        await Auth.fakeLogin(email, password, navigation)
    }


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.form}>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.title}>Bem-Vindo de Volta!</Text>
                <Text style={styles.subtitle}>Fico Feliz em ve-lo novamente!</Text>
                <Text style={styles.label}>SEU E-EMAIL *</Text>
                <TextInput style={styles.input}
                    placeholder="Seu E-mail"
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={styles.label}>SUA SENHA *</Text>
                <TextInput style={styles.input}
                    placeholder="Sua Senha"
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize="none"
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={submit}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.signin} onPress={() => alert('cadastro')}>Não Possui Conta ?</Text>
            </View>
        </KeyboardAvoidingView>
    )
}
