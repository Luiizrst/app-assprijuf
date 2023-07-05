import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#BE2C2C",
    },
    loginContainer: {
        width: "100%",
        alignItems: "center",
    },
    contentImage: {
        width: "100%",
        alignItems: "center",
    },
    inputLogin: {
        height: 50,
        width: 265,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        paddingLeft: 15,
        borderRadius: 20,
    },
    ContentInputLogin: {
        flexDirection: "row",
        height: 50,
        width: 265,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        paddingLeft: 15,
        borderRadius: 20,
    },
    inputPassword: {
        height: 50,
        width: "80%",
    },
    buttonInputPassword: {
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
        height: "100%"
    },
    buttonLogin: {
        height: 55,
        width: 265,
        backgroundColor: '#1C1919',
        marginTop: 15,
        borderRadius: 20,
    },
    buttonCadastre: {
        height: 55,
        width: 265,
        backgroundColor: '#800000',
        marginTop: 10,
        borderRadius: 20,
    },
    textButtonLogin: {
        marginBottom: "auto",
        marginTop: "auto",
        fontSize: 18,
        fontWeight: "500",
        lineHeight: 22,
        textAlign: "center",
        color: '#fff',
    },
    buttonForgotPassword: {
        height: 35,
        width: 265,
        marginTop: 10,
    },
    textForgotPassword: {
        textDecorationLine: "underline",
        marginBottom: "auto",
        marginTop: "auto",
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 22,
        textAlign: "center",
        color: '#000',
    },
    contentError: {
        alignItems: "center",
        width: 265,
        marginBottom: 20,
    },
    messageError: {
        color: "#fff",
        fontSize: 25
    },
    modalContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        justifyContent: "center",
        alignItems: "center",
        height: "30%",
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 20,
        borderColor: "#d00000",
        borderWidth: 5,
    },
    modalText: {
        color: "#000",
        fontSize: 18,
        textAlign: "center",
        width: "98%",
        marginBottom: 15,

    },
    buttonModal: {
        backgroundColor: "#d00000",
        height: 60,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    }, 
    contentMessage: {
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        marginTop: 100,
        marginBottom: 10,
    },
    messageError: {
        color: "#fff",
        fontSize: 28,
    },
    modalContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
    },
});

export default styles;