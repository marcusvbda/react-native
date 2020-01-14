import React from 'react';
import { Container } from './styles';
import { ActivityIndicator, } from 'react-native';

export default function Loading({ visible }) {
    if (!visible) return <></>;
    return (
        <Container>
            <ActivityIndicator size={50} color="#fefefe" />
        </Container>
    );
};