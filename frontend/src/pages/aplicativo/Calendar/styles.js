import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    day: {
        width: '100%',
        flexDirection: "row",
    },
    dayLabel: {
        alignItems: 'center',
        padding: 5,
        width: "20%",
        borderRightWidth: 0.3,
        borderRightColor: "#8D959D",
        borderBottomWidth: 0.3,
        borderBottomColor: "#8D959D",
    },
    monthDateText: {
        color: '#BE2C2C',
        fontSize: 21,
    },
    dayText: {
        color: '#BE2C2C',
        textTransform: 'capitalize'
    },
    allEvents: {
        width: '100%',
        paddingLeft: "1%",
        paddingRight: "34%",                                            
        borderBottomWidth: 0.3,
        borderBottomColor: "#8D959D",
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
});


export default styles;