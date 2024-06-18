import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 32,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    input: {
        width: '100%',
        padding: 15,
        marginBottom: 15,
        borderRadius: 5,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        fontSize: 18,
    },
    button: {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        backgroundColor: '#6200ee',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
});