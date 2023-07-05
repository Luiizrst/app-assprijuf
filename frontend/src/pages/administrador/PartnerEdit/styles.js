import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BE2C2C",
    },
    board: {
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        height: "90%",
        backgroundColor: '#333333',
        borderRadius: 30,
        paddingVertical: 15

    },
    boardSucess: {
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: "40%",
        backgroundColor: '#333333',
        borderRadius: 30,
    },
    titleInput: {
        marginTop: 10,
        marginBottom: 2,
        paddingLeft: 10,
        fontSize: 17,
        color: "#E4E3E3",
    },
    inputCadastre: {
        height: 50,
        width: 265,
        backgroundColor: '#FFFFFF',
        paddingLeft: 15,
        borderRadius: 20,
    },
    inputCadastreAdvantages: {
        height: 300,
        width: 265,
        backgroundColor: '#FFFFFF',
        textAlignVertical: 'top',
        padding: 15,
        borderRadius: 20,
        marginBottom: 20,
    },
    viewImagePicker: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    imagePicker: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9A2B2B",
        padding: 20,
        borderRadius: 20,
    },
    textImagePicker: {
        fontSize: 16,
        color: '#FFFFFF'
    },
    imagePicked: {
        backgroundColor: "#fff",
        borderRadius: 10,
        width: 200,
        height: 200,
        marginVertical: "5%",
        borderWidth: 1,
        borderColor: "#9A2B2B",
    },
    buttonCadastre: {
        alignItems: "center",
        height: 60,
        width: 265,
        backgroundColor: '#9A2B2B',
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
    contentError: {
        justifyContent: "center",
        alignItems: "center",
    },
    messageError: {
        textAlign: "center",
        color: "#fff",
        fontSize: 20,
        marginTop: 10,
    },
    viewSucess: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        height: 180,
    },
    textSucessMessage: {
        color: '#fff',
        marginBottom: 20,
        fontSize: 25
    },
});

export default styles;