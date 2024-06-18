import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

export default function SignIn() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [token, setToken] = useState(null);

    const navigation = useNavigation();
    console.log('Token Lindao', token);
    const tokenX = token 

    useEffect(() => {
        if (token != null) {
            AsyncStorage.setItem('token', tokenX)
                .then(() => {
                    console.log("Token SignIn", tokenX);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [token]);
    const fetchToken = async () => {
        try {
            const response = await axios.post(
                'http://bedon.pythonanywhere.com/api/token/',
                {
                    "username": usuario,
                    "password": senha
                }
            );
            setToken(response.data.access);
            navigation.navigate("home");
        } catch (error) {
            if (error.response) {
                
                console.log("Erro de resposta:", error.response.data);
                console.log("Status do erro:", error.response.status);
            } else if (error.request) {
                
                console.log("Não houve resposta do servidor:", error.request);
            } else {
                
                console.log("Erro ao configurar a requisição:", error.message);
            }
            console.log("Erro geral:", error);
        }
    };
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                placeholder='Usuário'
                onChangeText={setUsuario}
                value={usuario}
                style={styles.input}
            />
            <TextInput
                placeholder='Senha'
                onChangeText={setSenha}
                value={senha}
                style={styles.input}
                secureTextEntry={true}
            />
            <Pressable style={styles.button} onPress={fetchToken}>
                <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => navigation.navigate('signup')}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
        </View>
    );
}
