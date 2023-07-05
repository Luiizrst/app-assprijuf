import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttonPrimary: {
        backgroundColor: '#9A2B2B',
        height: 54,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 16,
        marginHorizontal: 8,
        flex: 1

    },
    buttonSecondary: {
        backgroundColor: '#f0f0f0',
        flexDirection: "row",
        height: 54,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 16,
        flex: 1,
        marginHorizontal: 8,
    },
    textButtonPrimary: {
        fontSize: 20,
        color: '#fff',
    },
    textButtonSecondary: {
        fontSize: 24,
        color: '#505AFC',
        fontWeight: 'bold',
        marginLeft: 16

    }
});

export default styles;