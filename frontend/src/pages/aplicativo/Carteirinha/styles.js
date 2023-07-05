import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: "4%"
    },
    contents: {
        justifyContent: 'center',
        alignItems: "center",
        resizeMode: "cover",
        borderRadius: 50,
        width: "98%",
        height: "95%",
    },
    topCard: {
        flexDirection: "row",
        width: "98%",
        height: "29%",
        paddingTop: "5%",
        paddingRight: "5%",
        paddingBottom: "5%",
    },
    butttonCard: {
        width: "10%",
        padding: "1%",
    },
    buttonBack: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        height: 40,
        width: 40,
        backgroundColor: "#000"
    },
    logoCard: {
        paddingLeft: "3%",
        justifyContent: "center",
        width: "40%",
        height: "100%",
    },
    logoImage: {
        width: 75,
        height: 76,
    },
    titleCard: {
        width: "50%",
    },
    titleCardText: {
        textAlign: "center",
        fontSize: 17,
        fontWeight: "bold",
    },
    bottomCard: {
        flexDirection: "row",
        width: "98%",
        height: "64%",
    },
    boardInfo: {
        paddingHorizontal: "2%",
        width: "60%",
        height: "100%",
    },
    boxMain: {
        height: "25%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    profession: {
        fontSize: 19,
        fontWeight: "bold",
        marginBottom: "1%"
    },
    infos: {
        flexDirection: "row",
        height: "75%",
        width: "100%",
    },
    infoLeft: {
        paddingHorizontal: "1%",
        height: "100%",
        width: "50%",
    },
    infoRight: {
        paddingHorizontal: "1%",
        height: "100%",
        width: "50%",
    },
    title: {
        marginTop: 1,
        fontSize: 14,
        fontWeight: "bold",
    },
    info: {
        fontSize: 12,
        textAlign: "left",
        fontWeight: "bold",
        backgroundColor: "#fff",
        borderColor: '#000000',
        borderRadius: 20,
        opacity: 0.9,
        paddingHorizontal: 3,
        paddingVertical: 2,
    },
    photoCard: {
        justifyContent: "center",
        alignItems: "center",
        width: "40%",
        height: "95%",
    },
    userImage: {
        borderRadius: 10,
        width: "45%",
        height: "90%",
    }
});

export default styles;