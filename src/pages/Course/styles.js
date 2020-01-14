import styled from 'styled-components/native';
import { Colors } from '~/config';

export const Container = styled.View.attrs({
    backgroundColor: Colors.primary
})`
    flex: 1;
    align-items : center;
    padding : 20px;
`;

export const Title = styled.Text`
    font-size: 32px;
    margin-top: 3px;
    color: #fefefe;
`;

export const Image = styled.Image``;

export const Text = styled.Text`
    color : #fefefe;
`;
export const Description = styled.Text`
    color : #fefefe;
`;

export const Tutor = styled.Text`
    font-weight : bold;
    color : #fefefe;
`;

export const Progress = styled.View`
    flex-direction : row;
    align-items : center;
    justify-content:center;
`;