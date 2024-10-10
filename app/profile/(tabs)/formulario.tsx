import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import FormApp from '../../formulario';
export default function Tab() {
    return (
        <View style={styles.container}>
            <FormApp />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mt20: {
        marginTop: 20,
        width: 300,
    },
});