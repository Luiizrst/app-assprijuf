import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#BE2C2C",
    },
    buttonsBoard: {
        justifyContent: "space-evenly",
        width: "95%",
        flexDirection: "row"
    },
    button: {
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "48%",
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 50
    },
    buttonEditUser: {
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        width: "98%",
    },
    textButtonEdit: {
        fontSize: 15,
    },
    board: {
        height: "85%",
        maxWidth: "90%",
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 20,
    },
    boxDataImage: {
        alignItems: "center",
        width: 280,
    },
    dataPhoto: {
        alignItems: "center",
        width: 150,
        height: 200,
        marginBottom: 10,
        borderRadius: 20,
        borderColor: '#000',
        borderWidth: 0.8
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
        width: "90%",
        marginBottom: 2,
        fontSize: 17,
        lineHeight: 30,
    }
});

export default styles;