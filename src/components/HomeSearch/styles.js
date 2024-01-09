import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#e7e7e7',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4
    },
    inputText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#434343'
    },
    timeContainer: {
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        flexDirection: 'row',
        width: 90,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 7
    },
    row: {
        flexDirection: 'row',
        padding: 10,
        alignItems: "center",
        borderColor: '#dbdbdb',
        borderBottomWidth: 1
    },
    iconContainer: {
        backgroundColor: '#b3b3b3',
        padding: 10,
        borderRadius: 25
    },
    destinationText: {
        marginLeft: 10,
        fontWeight: '600',
        fontSize: 18
    }
});

export default styles;