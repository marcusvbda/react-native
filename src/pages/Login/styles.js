import styled from 'styled-components/native';
import { Colors } from '~/config';
import { StyleSheet } from 'react-native';

export const Container = styled.View.attrs({
    backgroundColor: Colors.primary
})`
    flex : 1;
    align-items : center;
    justify-content : center;
`;

export const Text = styled.Text`
    color : #FFF;
    margin-bottom : 20px;
`;

export const Logo = styled.Image`
    margin-bottom : 50px;
`;


export const Email = styled.TextInput`
    background : #fefefe;
    align-self : stretch;
    margin : 0 20px 0 20px;
    border-top-left-radius : 10px;
    border-top-right-radius : 10px;
    border-width: 1px;
    border-color: #e8eaed;
    padding : 10px 20px 10px 20px;
`;

export const Password = styled.TextInput`
    background : #fefefe;
    align-self : stretch;
    margin : 0 20px 0 20px;
    border-bottom-left-radius : 10px;
    border-bottom-right-radius : 10px;
    padding : 10px 20px 10px 20px;
`;

export const SignInButton = styled.TouchableOpacity`
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.8);
    border-radius : 50px;
    justify-content : center;
    align-items : center;
    padding : 10px 40px 10px 40px;
    margin-top : 30px;
    align-items : center;
    justify-content : center;
    flex-direction : row;
    margin-bottom : 20px;
`;

export const SignInButtonText = styled.Text`
    color : #fefefe;
    margin-left : 10px;
`;

export const SingUpButton = styled.TouchableOpacity`
    justify-content:center;
    width: 100%;
    align-items :center;
`;

export const Strong = styled.Text`
    font-weight : bold;
    color : #fefefe;
`;
