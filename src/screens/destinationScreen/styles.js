import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%'
    },
    textInput: {
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 5,
    },

    row : {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10
    },

    iconContainer: {
        backgroundColor: '#a2a2a2',
        borderRadius: 50,
        padding: 5,
        marginRight: 10
    },

    autocompleteContainer: {
        position: "absolute",
        top: 0,
        right: 10,
        left: 10,
    },

    textInput: {
        padding: 10,
        backgroundColor: '#eee',
        marginVertical: 10,
        marginLeft: 15
    },

    listView: {
        position: "absolute",
        top: 125
    },

    separator: {
        backgroundColor: '#eee',
        height: 1
    },

    cercle: {
        height: 6,
        width: 6,
        backgroundColor: 'green',
        position: "absolute",
        top: 30,
        left: 10,
        borderRadius: 5
    },

    line: {
        height: 49,
        width: 1,
        backgroundColor: 'green',
        position: "absolute",
        top: 37.1,
        left: 12.2
    },

    square: {
        height: 6,
        width: 6,
        backgroundColor: 'green',
        position: "absolute",
        top: 87,
        left: 10
    }
});

export default styles;