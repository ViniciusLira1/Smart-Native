import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const MAX_SENSORS = 15; 

export default function Home() {
  const initialRegion = {
    latitude: -22.9140639,
    longitude: -47.068686,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [sensores, setSensores] = useState([]);
  const [token, setToken] = useState(null);
  const [closestSensor, setClosestSensor] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then((token) => {
        if (token != null) {
          setToken(token);
          fetchToken(token);
        }
      })
      .catch((erro) => {
        console.error("Erro: ", erro);
      });
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Permissão de localização negada');
        return;
      }

      const locationSubscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 100,
          distanceInterval: 1,
        },
        (newLocation) => {
          setLocation(newLocation.coords);
          findClosestSensor(newLocation.coords, sensores);
        }
      );

      return () => {
        locationSubscription.remove();
      };
    })();
  }, [sensores]);

  const fetchToken = async (token) => {
    try {
      const response = await axios.get('http://bedon.pythonanywhere.com/api/sensores/', {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      setSensores(response.data);
    } catch (error) {
      console.error("Deu Erro:", error);
    }
  };

  const haversineDistance = (coords1, coords2) => {
    const toRad = (x) => (x * Math.PI) / 180;
    const R = 6371; // Radius of the Earth in km
    const dLat = toRad(coords2.latitude - coords1.latitude);
    const dLon = toRad(coords2.longitude - coords1.longitude);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(coords1.latitude)) *
        Math.cos(toRad(coords2.latitude)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const findClosestSensor = (currentLocation, sensors) => {
    if (!currentLocation || sensors.length === 0) return;

    let closest = null;
    let minDistance = Infinity;

    sensors.forEach((sensor) => {
      const distance = haversineDistance(currentLocation, {
        latitude: sensor.latitude,
        longitude: sensor.longitude,
      });
      if (distance < minDistance) {
        closest = sensor;
        minDistance = distance;
      }
    });

    setClosestSensor(closest);
  };

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        initialRegion={initialRegion}
      >
        {sensores.slice(0, MAX_SENSORS).map(sensor => (
          <Marker
            key={sensor.id}
            coordinate={{ latitude: sensor.latitude, longitude: sensor.longitude }}
            pinColor="blue" 
            title={`Sensor ${sensor.id}`}
          />
        ))}
        {location && (
          <Marker
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            pinColor="red" 
          />
        )}
      </MapView>
      <Text style={styles.locationText}>Latitude: {location?.latitude}, Longitude: {location?.longitude}</Text>
      {closestSensor && (
        <ScrollView style={styles.infoContainer}>
          <Text style={styles.tipoSensor}>Dados do Sensor</Text>
          <View style={styles.sensorContainer}>
          <Text style={styles.paragraph}>{`Sensor mais próximo: ${closestSensor.id}`}</Text>
          <Text style={styles.paragraph}>{`Latitude: ${closestSensor.latitude}`}</Text>
          <Text style={styles.paragraph}>{`Longitude: ${closestSensor.longitude}`}</Text>
          <Text style={styles.paragraph}>{`Tipo: ${closestSensor.tipo}`}</Text>
          <Text style={styles.paragraph}>{` Responsavel: ${closestSensor.responsavel}`}</Text> 
          </View>
          <View>
          <View style={styles.sensorContainer2}>
                <Text style={styles.tipoSensor}>Deseja conhecer A Smart City?</Text>
                 <Text style={styles.paragraph}>
                Clique no botão a baixo para mais informações!
                </Text>
                <Pressable style={styles.button} onPress={() => navigation.navigate('details')}>
                  <Text style={styles.buttonText}>Detalhes</Text>
                  </Pressable>
          </View>
          </View>
        </ScrollView>
        
      )}
    </View>
  );
}
