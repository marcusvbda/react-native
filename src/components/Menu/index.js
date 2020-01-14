import React, { useEffect, useState } from 'react';
import {
    Container,
    Nav,
    NavItem,
    NavText,
    SignOutButton,
    SignOutButtonText
} from "./styles";
import Icon from 'react-native-vector-icons/MaterialIcons';
import storage from '~/services/storage';
import message from '~/services/message';

export default function Menu({ translateY, navigation }) {
    const [user, setUser] = useState("Usuário");

    useEffect(() => {
        async function init() {
            let _user = await storage.get("user");
            _user = JSON.parse(_user);
            setUser(_user.name);
        }
        init();
    }, []);

    function logout() {
        message.confirm("Confirmação", "Deseja sair do App ? ", () => {
            storage.remove("user")
            navigation.navigate("Auth")
        });
    }

    return (
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0, 150],
                outputRange: [0, 1]
            })
        }}>
            <Nav>
                <NavItem onPress={() => message.simple("Desculpe", "Ainda não implementamos isso")}>
                    <Icon name="person-outline" size={20} color="#FFF" />
                    <NavText>Perfil de {user}</NavText>
                </NavItem>
            </Nav>
            <SignOutButton onPress={logout}>
                <SignOutButtonText>Sair do App</SignOutButtonText>
            </SignOutButton>
        </Container >
    );
}