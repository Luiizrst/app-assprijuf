import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BE2C2C",
    },
    board: {
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: "80%",
        width: "90%",
        backgroundColor: '#333333',
        padding: 20,
        borderRadius: 20,
    },
    inputs: {
        justifyContent: 'space-evenly',
        marginBottom: 20,
    },
    titleInput: {
        marginBottom: 2,
        paddingLeft: 10,
        fontSize: 20,
        color: "#E4E3E3",
    },
    inputTitle: {
        height: 50,
        borderRadius: 50,
        padding: 15,
        backgroundColor: '#fff',
    },
    contentPickers: {
        width: '100%',
    },
    textButton: {
        fontSize: 16,
        color: '#fff'
    },
    buttonSelectDate: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: "row",
        width: "100%",
        height: 50,
        borderRadius: 50,
        backgroundColor: '#9A2B2B',
        marginBottom: 15,
    },
    buttonCadastreView: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewButtonsSucess: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonCadastre: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 250,
        borderRadius: 30,
        backgroundColor: '#9A2B2B',
    },
    textButtonCadastre: {
        fontSize: 20,
        color: '#fff'
    },
    dateView: {
        backgroundColor: "#fff",
        borderRadius: 30,
        marginBottom: 20,
    },
    dateFinalView: {
        flexDirection: "row",
        width: 280,
        height: 130,
        borderRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    iconDate: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "15%",
        height: "100%",
    },
    textDate: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "85%",
        height: "100%",
    },
    dateFinal: {
        fontSize: 18,
        marginBottom: 18,
        textAlign: "center",
        color: "#000"
    },
    viewSucess: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "95%",
        marginBottom: 10
    },
    textSucessMessage: {
        color: '#fff',
        marginBottom: 20,
        fontSize: 30
    },
    titleSucess: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textSucess: {
        paddingHorizontal: "5%",
        textAlign: 'center',
        fontSize: 20,
    },
    buttonSuccess: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        width: 250,
        borderRadius: 30,
        backgroundColor: '#62616B',
    },
    boardError: {
        backgroundColor: "#fff",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "115%",
        height: "110%",
        paddingVertical: "60%",
        borderRadius: 30
    },
    messageError: {
        color: "#BE2C2C",
        fontSize: 25,
        fontWeight: "bold",
        lineHeight: 30,
    },
    modalContent: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    mask: {
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        opacity: 0.6
    },
    content: {
        position: "absolute",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60%",
        width: "85%",
        backgroundColor: "#fff",
        borderWidth: 5,
    },
    modalText: {
        color: "#000",
        fontSize: 18,
        textAlign: "center",
        width: "95%",
        marginTop: 40,

    },
    timePicker: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        width: "90%",
        height: 50,
        padding: 5,
        borderRadius: 50,
        backgroundColor: '#9A2B2B',
    },
    pickers: {
        height: '100%',
        width: '45%',
    },
    exitModal: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: "row",
        width: "100%",
        height: "10%",
    },
    buttonModal: {
        marginRight: "12%"
    },
    textModal: {
        fontSize: 16,
        color: "#054F70"
    },
    mask: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BE2C2C",
        opacity: 0.8
    },
});

export default styles;