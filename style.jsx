import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    loadingScreenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
      flex: 1,
      padding: 20
    },
    titleText: {
        fontFamily: 'ubuntu-bold',
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    cardItem: {
        fontFamily: 'ubuntu-bold',
        fontSize: 18,
        color: '#333',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth: 3,
        marginVertical: 8
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        // textAlign: 'center'
    }
});

export default globalStyles;