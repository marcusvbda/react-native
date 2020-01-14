import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import {
    Container,
    Text,
    Logo,
    Email,
    Password,
    SignInButton,
    SignInButtonText,
    SingUpButton,
    Strong
} from "./styles";
import logo from '~/../assets/logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import message from '~/services/message';
import api from '~/services/api';
import Loading from '~/pages/Loading';
import storage from '~/services/storage';

export default function Login({ navigation }) {
    const [email, setEmail] = useState("owner@owner.com");
    const [password, setPassword] = useState("owner");
    const [loading, setLoading] = useState(false);

    function submit() {
        if ((!email) || (!password)) return message.simple("Erro", "Preencha os campos")
        Keyboard.dismiss();
        setLoading(true);
        api.post('/app/login', { email, password }).then(async (res) => {
            if (!res.data) {
                setLoading(false);
                return message.simple("Erro", "Erro ao efetuar login, verifique suas credenciais ...");
            }

            if (Array.isArray(res.data)) return navigation.navigate('SetSchool', { tenants: res.data, email, password });
            await storage.set("user", JSON.stringify(res.data));
            return navigation.navigate('App');
        }).catch(er => {
            message.simple("Erro", "Erro ao efetuar login, verifique suas credenciais ...");
            console.log("erro", er)
            setLoading(false)
        })
    }

    return (
        <Container>
            <Loading visible={loading} />
            <Logo source={logo} />
            <Text>Preencha o formulário e efetue o login.</Text>
            <Email
                placeholder="Digite o e-mail aqui..."
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <Password
                placeholder="Digite a senha aqui..."
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                value={password}
                onChangeText={setPassword}
            />
            <SignInButton onPress={submit}>
                <Icon name="lock" size={20} color="#FFF" />
                <SignInButtonText>Entrar</SignInButtonText>
            </SignInButton>
            <SingUpButton onPress={() => message.simple("Desculpe", "Ainda não implementamos isso")}>
                <Text>Ainda não possui uma conta ?   <Strong>Crie uma</Strong></Text>
            </SingUpButton>
        </Container>
    );
}