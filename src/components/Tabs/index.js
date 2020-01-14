import React from 'react';
import {
    Container,
    TabsContainer,
    TabItem,
    TabText
} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Tabs({ translateY }) {

    function renderItems() {
        return [1, 2, 3, 4, 5].map(item => {
            return <TabItem key={item}>
                <Icon name="stars" size={24} color="#3f3f3f" style={{ alignSelf: "center" }} />
                <TabText>Lorem Ipsum</TabText>
            </TabItem>
        })
    }

    return (
        <Container style={{
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0, 380],
                    outputRange: [0, 30],
                    extrapolate: 'clamp'
                })
            }],
            opacity: translateY.interpolate({
                inputRange: [0, 380],
                outputRange: [1, 0],
                extrapolate: 'clamp'
            })
        }}>
            <TabsContainer>
                {renderItems()}
            </TabsContainer>
        </Container>
    );
}