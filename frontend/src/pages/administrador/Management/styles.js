import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BE2C2C",
    },
    board: {
        justifyContent: "space-evenly",
        height: "60%",
        width: "90%",
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
    },
    boxBoard: {
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        height: "30%",
    },
    buttonManagement: {
        justifyContent: "center",
        alignItems: "center",
        height: "135%",
        width: 140,
        borderColor: '#B90A0A',
        borderWidth: 0.4,
        borderRadius: 10,
    },
    textButtonManagement: {
        fontSize: 16,
        color: '#B90A0A',
        textAlign: "center",
    },
});

export default styles;