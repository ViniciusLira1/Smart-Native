import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  map: {
    height: '40%', // Reduz a altura do mapa para 40% da tela
  },
  infoContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    margin: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingHorizontal: 10,
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
},
  tipoSensor: {
    padding:10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200ee',
    textAlign: 'center',
},
paragraph: {
    fontSize: 16,
    color: '#4b5563',
    marginBottom: 15,
    textAlign: 'justify',
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
}
});
