import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#BE2C2C",
    },
    utils: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        height: 80,
        width: "100%"
    },
    addPartner: {
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
    },
    buttonAddPartner: {
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: "#fff"
    },
    viewInput: {
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        height: 50,
        width: "70%",
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
    boxPartner: {
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
    },
    boxPartners: {
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
    boxPartnersImage: {
        marginRight: 10,
    },
    partnersPhoto: {
        borderWidth: 0.8,
        borderColor: "#B90A0A",
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 30,
    },
    boxPartnerUtilities: {
        justifyContent: "space-around",
        marginLeft: 10,
        height: "100%",
        width: "70%",
        alignContent: "center"
    },
    boxPartnersText: {
        marginBottom: 15,
        maxHeight: "100%",
    },
    titlePartnersText: {
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'capitalize',
        color: "#B90A0A"
    },
    boxButton: {
        justifyContent: "space-evenly",
        flexDirection: "row",
        opacity: 0.6,
    },
    buttonView: {
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        backgroundColor: '#55a630',
        borderRadius: 10,
    },
    buttonEdit: {
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        backgroundColor: '#faa307',
        borderRadius: 10,
    },
    buttonDelete: {
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        backgroundColor: '#d00000',
        borderRadius: 10,
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
    }
});

export default styles;