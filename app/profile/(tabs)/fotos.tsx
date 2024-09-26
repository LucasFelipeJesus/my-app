import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Avatar, Button } from 'react-native-paper';
import * as FileSystem from 'expo-file-system';
import React, { useEffect, useState } from 'react';


export default function Tab() {
    const photoFileName = FileSystem.documentDirectory + 'photo.jpg';
    const [photo, setPhoto] = useState<string | null>(null);
    const verificarFoto = async () => {
        const file = await FileSystem.getInfoAsync(photoFileName);
        if (file.exists) {
            setPhoto(file.uri);
        }
    }

    useEffect(() => {
        verificarFoto();
    }, [])
    return (
        <View style={styles.container}>
            <Text>Tab fotos</Text>
            {photo && <Avatar.Image size={200} source={{ uri: photo }} />}
            <Button style={styles.mt20} mode="contained" onPress={verificarFoto}>Verificar foto</Button>

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
