import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#BE2C2C",
    },
    button: {
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "60%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 50
    },
    buttonEditUser: {
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
        backgroundColor: "#fff",
    },
    textButtonEdit: {
        fontSize: 18,
    },
    acceptBox: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "80%",
        height: "8%"
    },
    buttonDelete: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#fff",
        height: 60,
        width: 60
    },
    buttonAccept: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "#fff",
        height: 60,
        width: 60
    },
    board: {
        alignItems: 'flex-start',
        height: "85%",
        maxWidth: "90%",
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 20,
    },
    boardError: {
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        height: "100%",
        paddingVertical: "60%"
    },
    messageError: {
        color: "#BE2C2C",
        fontSize: 25,
        fontWeight: "bold",
        lineHeight: 30,
    },
    boxDataImage: {
        alignItems: "center",
        width: 280,
    },
    dataPhoto: {
        borderColor: "#000",
        borderWidth: 1,
        alignItems: "center",
        width: 200,
        height: 200,
        marginBottom: 10,
        borderRadius: 30,
    },
    boxDataText: {
        width: 280,
        marginBottom: 5,
        borderTopColor: "#000",
        borderTopWidth: 0.7,
    },
    titleDataText: {
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 30,
    },
    dataText: {
        marginBottom: 2,
        fontSize: 17,
        lineHeight: 30,
    },
    modalContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    mask: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "#BE2C2C",
        opacity: 0.7,
    },
    content: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        height: 220,
        width: 300,
        backgroundColor: "#fff",
        borderRadius: 20,
        borderColor: "#831D1C",
        borderWidth: 5,
    },
    exitModal: {
        paddingRight: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        width: "100%",
        height: "10%",
        marginBottom: "10%"
    },
    modalText: {
        color: "#000",
        fontSize: 18,
        textAlign: "center",
        width: "98%",
        marginBottom: 15,

    },
    buttonModal: {
        backgroundColor: "#BE2C2C",
        height: 60,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginBottom: "8%"
    },
    buttonModalAccept: {
        backgroundColor: "green",
        height: 60,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginBottom: "8%"
    }
});

export default styles;