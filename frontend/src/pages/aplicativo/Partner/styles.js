import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BE2C2C",
    },
    board: {
        alignItems: 'flex-start',
        height: "90%",
        minWidth: "90%",
        maxWidth: "90%",
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 20,
    },
    partnerText: {
        textTransform: 'capitalize',
        textAlign: 'justify',
        fontSize: 16,
        paddingHorizontal: 10,
    },
    partnerPhotoData: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginBottom: 15,
    },
    parterPhoto: {
        minWidth: 220,
        minHeight: 200,
        maxWidth: 300,
        maxHeight: 200,
        borderRadius: 30,
        borderWidth: 0.4,
        borderColor: "#B90A0A",
        resizeMode: "cover",
    },
    partnerTextData: {
        marginBottom: 15,
        paddingHorizontal: 5,
    },
    partnerTitleText: {
        marginBottom: 10,
        fontSize: 22,
        fontWeight: "bold",
    },
    partnerSubTitleBox: {
        paddingHorizontal: 15,
    },
    subTitleBox: {
        marginTop: 10,
        borderTopColor: "#000",
        borderTopWidth: 0.3
    },
    partnerSubTitleText: {
        fontSize: 18,
        fontWeight: "bold"
    },
});

export default styles;