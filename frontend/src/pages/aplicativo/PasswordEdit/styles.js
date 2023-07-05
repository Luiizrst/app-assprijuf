import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingVertical: 30,
        backgroundColor: "#BE2C2C",
        justifyContent: "center",
        alignItems: "center",
    },
    board: {
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        backgroundColor: '#333333',
        paddingVertical: 15,
        borderRadius: 20,

    },
    inputs: {
        marginBottom: 20
    },
    titleInput: {
        marginTop: 10,
        fontSize: 18,
        paddingLeft: 10,
        color: "#E4E3E3",
    },
    ContentInput: {
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
    buttonCadastre: {
        alignItems: "center",
        height: 80,
        width: 265,
        backgroundColor: '#62616B',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 20,
    },
    textButtonCadastre: {
        marginTop: "auto",
        marginBottom: "auto",
        fontSize: 20,
        fontWeight: "500",
        lineHeight: 25,
        color: '#FFFFFF',
    }
});

export default styles;