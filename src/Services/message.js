import { Alert } from 'react-native';

const message = {
    simple: (title, message = "") => {
        Alert.alert(title, message);
    },
    confirm: (title, message, callback) => {
        Alert.alert(title, message, [
            { text: "NÃO", onPress: () => false },
            {
                text: "SIM", onPress: () => callback()
            },
        ]);
    }
}

export default message;