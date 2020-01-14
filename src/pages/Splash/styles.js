import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { Colors } from '~/config';

export const Container = styled.View.attrs({
    backgroundColor: Colors.primary
})`
    flex : 1;
    justify-content : center;
    align-items : center;
`;

export const Image = styled(Animated.Image)`
    width : 100px;
    height : 100px;
`;