import { Alert } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

const Auth = {
    fakeLogin: async (email, password, navigation) => {
        if (!email) return Alert.alert("Validação", "E-mail é campo obrigatório")
        if (!password) return Alert.alert("Validação", "Senha é campo obrigatório")
        if ((email != "root") || (password != "root")) return Alert.alert("Erro", "Usuário e/ou senha incorretos")
        let user = { email }
        await AsyncStorage.setItem('user', JSON.stringify(user))
        return Auth.check(navigation)
    },
    logout: async (navigation) => {
        await AsyncStorage.removeItem('user')
        return navigation.navigate('Login')
    },
    check: (navigation) => {
        AsyncStorage.getItem('user').then(user => {
            if (user) return navigation.navigate('Home')
        })
    }
}

export default Auth