import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 25,
        backgroundColor: "#BE2C2C",
    },
    board: {
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: "75%",
        backgroundColor: '#333333',
        paddingVertical: "5%",
        borderRadius: 20,
    },
    inputs: {
        maxWidth: "85%"
    },
    checkBoxView: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginBottom: "2%"
    },
    titleInputCheckBox: {
        width: '70%',
        fontSize: 18,
        textAlign: 'center',
        color: "#E4E3E3",
    },
    checkBox: {
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#FFFFFF"
    },
});

export default styles;