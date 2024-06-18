import { StyleSheet } from 'react-native';



export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#6200ee',
        padding: 20,
        alignItems: 'center',
       
    },
    title: {
       marginTop:15,
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        justifyContent:'center'
    },
    content: {
        padding: 20,
    },
    paragraph: {
        fontSize: 16,
        color: '#4b5563',
        marginBottom: 15,
        textAlign: 'justify',
    },
    image: {
        width: '100%',
        height: 230,
        borderRadius: 10,
        marginTop: 20,
    },
    titleSensor: {
        padding:10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginTop:10
    },
    tipoSensor: {
        padding:10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6200ee',
        textAlign: 'center',
    },
    sensorContainer: {
        backgroundColor: '#f3f4f6',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }
    },
    sensorContainer2: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        }
    }
});
