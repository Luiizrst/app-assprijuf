import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 1910,
        backgroundColor: "#BE2C2C",
    },

    viewInput: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        height: 50,
        width: "80%",
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        paddingLeft: 15,
        borderRadius: 20,
    },
    inputSearch: {
        height: 50,
        width: "80%",
        fontSize: 18,
        borderRadius: 20,
    },

    board: {
        alignItems: 'flex-start',
        height: "80%",
        width: "90%",
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 20,
    },
    boxUsers: {
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
    },
    buttonUsers: {
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        height: 128,
        marginBottom: 15,
        padding: 20,
        borderWidth: 0.8,
        borderColor: "#B90A0A",
        borderRadius: 20,
    },
    boxUsersImage: {
        marginRight: 10,
    },
    usersPhoto: {
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 30,
        borderWidth: 0.8,
        borderColor: "#B90A0A",
    },
    boxUserUtilities: {
        justifyContent: "space-around",
        marginLeft: 10,
        height: "100%",
        width: "70%",
        alignContent: "center"
    },
    boxUsersText: {
        justifyContent: "center",
        alignContent: "center",
        width: "90%",
        maxHeight: "50%",
        marginBottom: 15,
        marginLeft: 10,
    },
    titleUsersText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
        color: "#B90A0A"
    },
});

export default styles;