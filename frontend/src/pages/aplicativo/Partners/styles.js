import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
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
    boxButton: {
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        padding: 10,
    },
    buttonPartners: {
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        width: "100%",
        height: 128,
        marginBottom: "5%",
        padding: "2%",
        borderWidth: 0.8,
        borderColor: "#B90A0A",
        borderRadius: 20,
    },
    boxPartnersImage: {
        width: "35%",
    },
    partnersPhoto: {
        alignItems: "center",
        width: "100%",
        height: "80%",
        borderRadius: 30,
        borderWidth: 0.4,
        borderColor: "#B90A0A",
    },
    boxPartnersText: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        maxHeight: "100%",
        width: "60%",
        alignContent: "center",
    },
    titlePartnersText: {
        fontSize: 20,
        textAlign: 'center',
        color: "#B90A0A"
    },
});

export default styles;