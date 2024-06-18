import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, TextInput, Pressable, Alert } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState(null);
    const [token, setToken] = useState(null);

    const navigation = useNavigation();

    useEffect(() => {
        // Salvar o token no AsyncStorage se ele estiver disponível
        if (token != null) {
            AsyncStorage.setItem('token', token)
                .then(() => {
                    console.log('Token SignUPX: ', token);
                    console.log('Token salvo com sucesso!');
                })
                .catch(error => {
                    console.error('Erro ao salvar token:', error);
                });
        }
    }, [token]);

    const createUser = async () => {
        try {
            await axios.post('http://bedon.pythonanywhere.com/api/create_user/', {
                username: usuario,
                email: email,
                password: password
            });
            const resp = await axios.post('http://bedon.pythonanywhere.com/api/token/', {
                username: usuario,
                password: password,
            });
            setToken(resp.data.access);
            navigation.navigate("home");
        } catch (error) {
            setErro(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CADASTRO</Text>
            <View style={styles.campos}>
                <Text style={styles.texto2}>Nome</Text>
                <TextInput
                    style={styles.textoNomeEmail}
                    onChangeText={setUsuario}
                    value={usuario}
                />
                <Text style={styles.texto2}>Email</Text>
                <TextInput
                    style={styles.textoNomeEmail}
                    onChangeText={setEmail}
                    value={email}
                />
                <Text style={styles.texto2}>Senha</Text>
                <TextInput
                    style={styles.addNew}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.btnBtn}>
                <Pressable style={styles.btn} onPress={createUser}>
                    <Text style={styles.btnCadastrar}>CADASTRAR</Text>
                </Pressable>
            </View>
            <View style={{ width: "80%" }}>
                <Text style={styles.textoErro}>{!erro ? '' : `Erro: ${erro}`}</Text>
            </View>
        </View>
    );
}
