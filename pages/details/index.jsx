import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import styles from './styles';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Smart_city from '../../assets/Smart_city.png';


export default function SmartCity() {
    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (!token) {
               
                navigation.navigate('signin');
            }
        };

        checkToken();
    }, [navigation]);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>O que é Smart City?</Text>
            </View>
            <View style={styles.content}>
            <Text style={styles.tipoSensor}>SMART CITY</Text>
                <Text style={styles.paragraph}>
                As cidades inteligentes, ou Smart City, são uma resposta moderna aos desafios urbanos contemporâneos. 
                Elas utilizam tecnologias avançadas de informação e comunicação para melhorar a eficiência dos serviços urbanos, aumentar a transparência na gestão pública, promover a interação com os cidadãos e fomentar o desenvolvimento sustentável. 
                No coração dessas tecnologias estão os sensores, dispositivos que capturam dados essenciais em tempo real para uma gestão mais eficaz da cidade.
                </Text>
                <Image
                    source={Smart_city} 
                    style={styles.image}
                />

                <Text style={styles.titleSensor}>Tipos de Sensores</Text>

                <View style={styles.sensorContainer}>
                <Text style={styles.tipoSensor}>Sensor Luminosidade</Text>
                 <Text style={styles.paragraph}>
                 Sensores de luminosidade são usados para medir a quantidade de luz em um ambiente. 
                        Eles são essenciais para sistemas de iluminação inteligente, que ajustam automaticamente a intensidade da luz 
                        com base nas condições atuais, economizando energia e melhorando o conforto dos cidadãos.
                </Text>
                </View>

                <View style={styles.sensorContainer2}>
                <Text style={styles.tipoSensor}>Sensor Umidade</Text>
                 <Text style={styles.paragraph}>
                 Sensores de luminosidade são usados para medir a quantidade de luz em um ambiente. 
                        Eles são essenciais para sistemas de iluminação inteligente, que ajustam automaticamente a intensidade da luz 
                        com base nas condições atuais, economizando energia e melhorando o conforto dos cidadãos.
                </Text>

                <View style={styles.sensorContainer}>
                <Text style={styles.tipoSensor}>Sensor Contador </Text>
                 <Text style={styles.paragraph}>
                 Sensores de luminosidade são usados para medir a quantidade de luz em um ambiente. 
                        Eles são essenciais para sistemas de iluminação inteligente, que ajustam automaticamente a intensidade da luz 
                        com base nas condições atuais, economizando energia e melhorando o conforto dos cidadãos.
                </Text>
                </View>

                <View style={styles.sensorContainer2}>
                <Text style={styles.tipoSensor}>Sensor Temperatura </Text>
                 <Text style={styles.paragraph}>
                 Sensores de luminosidade são usados para medir a quantidade de luz em um ambiente. 
                        Eles são essenciais para sistemas de iluminação inteligente, que ajustam automaticamente a intensidade da luz 
                        com base nas condições atuais, economizando energia e melhorando o conforto dos cidadãos.
                </Text>
                </View>


                </View>
            </View>
        </ScrollView>
    );
}

