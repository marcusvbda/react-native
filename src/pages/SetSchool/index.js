import React, { useState } from 'react';
import {
    Container,
    Text,
    Logo,
    SignInButton,
    SignInButtonText,
    SingUpButton,
    Strong
} from "./styles";
import logo from '~/../assets/logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import Loading from '~/pages/Loading';
import storage from '~/services/storage';

export default function SetSchool({ navigation }) {
    const [loading, setLoading] = useState(false);
    function submit(tenant_id) {
        setLoading(true);
        let email = navigation.getParam("email");
        let password = navigation.getParam("password");
        api.post('/app/login', { email, password, tenant_id }).then(async (res) => {
            if (!res.data) {
                setLoading(false);
                return message.simple("Erro", "Erro ao efetuar login ...");
            }
            await storage.set("user", JSON.stringify(res.data));
            return navigation.navigate('App');
        }).catch(er => {
            message.simple("Erro", "Erro ao efetuar login, verifique suas credenciais ...");
            console.log("erro", er)
            setLoading(false)
        })
    }

    function renderOptions() {
        let tenants = navigation.getParam("tenants");
        return tenants.map(tenant => (
            <SignInButton key={tenant.id} onPress={() => { submit(tenant.id) }}>
                <Icon name="lock" size={20} color="#FFF" />
                <SignInButtonText>Entrar na Escola <Strong>{tenant.name}</Strong></SignInButtonText>
            </SignInButton>
        ));
    }

    return (
        <Container>
            <Loading visible={loading} />
            <Logo source={logo} />
            <Text>Selecione a escola que deseja acessar</Text>
            {renderOptions()}
            <SingUpButton onPress={() => navigation.navigate("Login")}>
                <Text>Deseja <Strong>Voltar ao login ?</Strong></Text>
            </SingUpButton>
        </Container >
    );
}