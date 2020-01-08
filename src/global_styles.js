import { StyleSheet } from 'react-native'

const colors = {
    body: "#E3E3E3",
    primary: "#0073aa",
    secondary: "#23282D",
    success: "#00a339"
}

export default StyleSheet.create({
    body: {
        backgroundColor: colors.body,
        height: "100%",
        flex: 1,
        alignItems: "stretch",
        justifyContent: "center",
        flexDirection: "column",
        padding: 10,
    },
    card: {
        borderTopColor: colors.primary,
        borderTopWidth: 5,
        backgroundColor: "white",
        borderRadius: 5,
        flexDirection: "column",
    },
    container: {
        padding: 20,
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
    input_label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },
    btn: {
        height: 42,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    btn_primary: {
        backgroundColor: colors.primary
    },
    btn_success: {
        backgroundColor: colors.success
    },
    btn_outline_success: {
        backgroundColor: "white",
        borderColor: colors.success,
        borderWidth: 1
    },
    text_white: {
        color: 'white'
    },
    text_success: {
        color: colors.success
    },
    text_primary: {
        color: colors.primary
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
    link: {
        textDecorationLine: "underline",
        color: colors.primary,
        marginTop: 20,
        alignSelf: "center"
    }
})