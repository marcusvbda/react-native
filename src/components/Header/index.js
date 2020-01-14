import React from 'react';
import {
    Container,
    Top,
    Logo,
} from './styles'
import logo from '~/../assets/logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {
    return (
        <Container>
            <Top>
                <Logo source={logo} />
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
        </Container>
    );
}