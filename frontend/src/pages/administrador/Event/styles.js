import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BE2C2C",
    },
    board: {
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        maxHeight: "80%",
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: "2%"
    },
    eventData: {
        justifyContent: "center",
        alignItems: "center",
    },
    eventTextData: {
        marginBottom: "2%",
        width: "100%",
    },
    eventTitleText: {
        marginBottom: "2%",
        paddingLeft: 12,
        fontSize: 25,
        fontWeight: "bold",
    },
    infoEventsText: {
        marginBottom: "2%",
        width: "90%"
    },
    infoTitleEventsText: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 16,
        marginBottom: "2%",
    },
    titleEventText: {
        textTransform: 'capitalize',
        textAlign: 'justify',
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
    },
    eventText: {
        textTransform: 'capitalize',
        marginLeft: "2%",
        width: "90%",
        textAlign: 'center',
        fontSize: 20,
    },
});

export default styles;