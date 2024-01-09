const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#eee',
        borderColor: '#fff',
        borderBottomWidth: 3
    },
    image: {
        height: 70,
        width: 80,
        resizeMode: 'contain'
    },
    middleContainer: {
        flex: 1,
        marginHorizontal: 20
    },
    rightContainer: {
        justifyContent: 'flex-end',
        alignItems: "center",
        flexDirection: 'row'
    },
    type: {
        fontWeight: "900",
        fontSize: 18,
        marginBottom: 2,
        alignItems: 'center'
    },
    time: {
        fontWeight: "400",
        color: '#5d5d5d',
        fontSize: 15,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 18,
        marginHorizontal: 10
    }
})

export default styles;