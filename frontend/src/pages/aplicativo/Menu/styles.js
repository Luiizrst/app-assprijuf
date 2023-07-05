import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BE2C2C",
    },
    title: {
        marginBottom: 10,
        fontSize: 60,
        fontWeight: "500",
        color: "#E4E3E3",
    },
    board: {
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "65%",
        width: "90%",
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
    },
    boxBoard: {
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        flexDirection: "row",
        width: "100%",
        height: "30%",
    },
    buttonMenu: {        
        justifyContent: "center",
        alignItems: "center",
        height: "90%",
        minWidth: "42%",
        borderColor: '#B90A0A',
        borderWidth: 0.3,
        borderRadius: 20,
    },
    textButtonMenu: {
        marginTop: "5%",
        fontSize: 17,
        lineHeight: 22,
        color: '#B90A0A',
        textAlign: "center",
    },
});

export default styles;