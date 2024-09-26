import { CameraView, useCameraPermissions } from "expo-camera";
import { View } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import * as FileSystem from 'expo-file-system';

export default function Camera() {
    const [perm, reqPerm] = useCameraPermissions()
    const [photo, setPhoto] = useState<string | null>(null);

    const photoFileName = FileSystem.documentDirectory + 'photo.jpg';

    let camera: CameraView | null;
    const takePicture = async () => {
        if (perm) {
            const photo = await camera?.takePictureAsync();
            if (photo?.uri) {
                setPhoto(photo.uri);
                await FileSystem.deleteAsync(photoFileName);
                await FileSystem.copyAsync({ from: photo.uri, to: photoFileName });
            }
        }
    }
    const verificarFoto = async () => {
        const file = await FileSystem.getInfoAsync(photoFileName);
        if (file.exists) {
            setPhoto(photoFileName);
        }
    }

    useEffect(() => {
        verificarFoto();
    }, [])

    if (!perm) { return <></> }

    return (
        <View style={styles.container}>
            <CameraView facing="front" ref={(ref) => { camera = ref }} style={{ width: 300, height: 300 }} />
            <Button style={styles.mt20} mode="contained" onPress={takePicture}>Tirar foto</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    mt20: {
        marginTop: 20,
        width: 300,
    },
})


