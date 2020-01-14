import React from 'react';
import {
    Container,
    TabsContainer,
    TabItem,
    TabText
} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Tabs({ translateY, courses, principal, setPrincipal }) {

    function renderItems() {
        return courses.filter(x => x.id != principal).map(course => {
            return <TabItem key={course.id} onPress={() => { setPrincipal(course.id) }}>
                <Icon name="search" size={24} color="#3f3f3f" style={{ alignSelf: "center" }} />
                <TabText>{course.name}</TabText>
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