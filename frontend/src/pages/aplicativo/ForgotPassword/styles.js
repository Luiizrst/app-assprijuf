import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BE2C2C",
    },
    forgotPasswordContainer: {
        alignItems: "center",
    },
    inputForgotPassword: {
        height: 50,
        width: 265,
        backgroundColor: '#FFFFFF',
        marginTop: 20,
        paddingLeft: 15,
        borderRadius: 20,
    },
    buttonForgotPassword: {
        height: 65,
        width: 200,
        backgroundColor: '#1C1919',
        marginTop: 15,
        borderRadius: 20,
    },
    textButtonForgotPassword: {
        marginBottom: "auto",
        marginTop: "auto",
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 22,
        textAlign: "center",
        color: '#fff',
    },
    contentMessage: {
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        marginBottom: 20,
    },
    messageError: {
        color: "#fff",
        fontSize: 25
    },
    sucessMessage: {
        color: "#fff",
        fontSize: 45
    },
    mask: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BE2C2C",
        opacity: 0.8 
    },
    spinner: {
        width: 250,
        height: 250
    }
});

export default styles;