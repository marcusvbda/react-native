import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { Colors } from '~/config';

export const Container = styled.View.attrs({
    backgroundColor: Colors.primary
})`
    flex: 1;
    justify-content: center;
`;

export const Content = styled.View`
    flex: 1;
    max-height: 400px;
    z-index: 5;
`;

export const Card = styled(Animated.View)`
    flex: 1;
    background: #FFF;
    border-radius: 4px;
    margin: 0 20px;
    height: 100%;
    position : absolute;
    left : 0;
    right : 0;
    top : 0;
`;

export const CardHeader = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
`;

export const CardContent = styled.TouchableOpacity`
    flex: 1;
    padding: 0 30px 20px 30px;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 32px;
    margin-top: 3px;
    color: #333;
`;

export const CardFooter = styled.TouchableOpacity`
    padding: 30px;
    background: #eee;
    border-radius: 4px;
`;

export const Description = styled.Text`
    font-size: 12px;
    color: #333;
`;

export const HiddenContent = styled.View`
    height : 45px;
    width : 100%;
    background : #e5e5e5;
`;

export const Image = styled.Image`
    width : 100%;
    height : 100%;
`;