import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';

const FormApp = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleAgeChange = (value: string) => {
        if (!/^\d*$/.test(value)) {
            Alert.alert('Erro', 'A idade deve ser um número');
        } else {
            setAge(value);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Formulário de Usuário</Text>

            <Text style={styles.label}>Nome:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                placeholderTextColor="#888"
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.label}>Idade:</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite sua idade"
                placeholderTextColor="#888"
                value={age}
                onChangeText={handleAgeChange}
                keyboardType="numeric"
            />

            <View style={styles.output}>
                <Text style={styles.outputText}>
                    Nome: <Text style={styles.outputValue}>{name}</Text>
                </Text>
                <Text style={styles.outputText}>
                    Idade: <Text style={styles.outputValue}>{age}</Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#f0f0f5',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    label: {
        fontSize: 18,
        color: '#333',
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        marginBottom: 20,
        borderRadius: 10,
        fontSize: 16,
        color: '#333',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    output: {
        marginTop: 30,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    outputText: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },
    outputValue: {
        fontWeight: 'bold',
        color: '#007bff',
    },
});

export default FormApp;
