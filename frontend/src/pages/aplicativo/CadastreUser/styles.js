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
        width: "90%",
        backgroundColor: '#333333',
        paddingVertical: 15,
        borderRadius: 20,
    },
    viewImagePicker: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    imagePicked: {
        borderRadius: 10,
        width: 200,
        height: 200,
        marginVertical: "5%"
    },
    imagePicker: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9A2B2B",
        padding: 15,
        borderRadius: 20,
        marginBottom: "5%"
    },
    textImagePicker: {
        fontSize: 16,
        color: '#FFFFFF'
    },
    inputs: {
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "100%",
        marginBottom: "5%"
    },
    button: {
        height: 70,
        marginBottom: "10%"
    }
});

export default styles;