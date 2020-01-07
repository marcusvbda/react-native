import { StyleSheet } from 'react-native'


export default StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDD',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 2
    },
    logo: {
        resizeMode: "stretch",
        alignSelf: "center",
        marginBottom: 50,
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },
    button: {
        height: 42,
        backgroundColor: '#121517',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },
    title: {
        fontWeight: 'bold',
        color: '#444',
        fontSize: 20
    },
    subtitle: {
        fontSize: 15,
        marginBottom: 20
    },
    signin: {
        color: "#0073aa",
        marginTop: 20,
        alignSelf: "center"
    }
})