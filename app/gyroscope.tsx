import React, { useState, useEffect } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { Gyroscope } from 'expo-sensors';

export default function App() {
    const [gyroscopeData, setGyroscopeData] = useState({ y: 0 });

    useEffect(() => {
        const subscription = Gyroscope.addListener((data) => {
            setGyroscopeData(data);
        });

        Gyroscope.setUpdateInterval(1000); // Atualiza a cada segundo

        return () => subscription.remove();
    }, []);

    useEffect(() => {
        if (Math.abs(gyroscopeData.y) < 0.1) {
            Alert.alert('Alerta', 'O celular está na posição vertical!');
        }
    }, [gyroscopeData]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Eixo Y: {gyroscopeData.y.toFixed(2)}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
    },
});






// import { Alert, StyleSheet, View } from "react-native"
// import { Text } from 'react-native-paper'
// import { Accelerometer, Gyroscope } from "expo-sensors"
// import { useEffect, useState } from "react"
// import { Link } from "expo-router"



// export default function Sensors() {
//     const [gdata, setGData] = useState({ x: 0, y: 0, z: 0 })


//     Gyroscope.setUpdateInterval(3000) //tempo de update
//     Gyroscope.addListener((data) => {  //adiciona um listener o que vai fazer
//         setGData(data)
//     })

//     useEffect(() => {
//         const y = gdata.y
//         if (y < 0.1) {
//             Alert.alert('Celular na vertical')

//         }
//     }, [gdata])

//     return (

//         <View style={styles.container}>
//             <Text>Sensors</Text>
//             <Text> </Text>
//             <Text>Gyroscope</Text>
//             <Text>X: {gdata.x.toFixed(4)}</Text>
//             <Text>Y: {gdata.y.toFixed(4)}</Text>
//             <Text>Z: {gdata.z.toFixed(4)}</Text>
//         </View>)

// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 3,
//         justifyContent: 'center',
//         backgroundColor: '#fff',
//         padding: 20,
//     },
//     mt20: {
//         marginTop: 20,
//     },
// })
// function UseEffect(arg0: () => void, p0: { x: number; y: number; z: number }[]) {
//     throw new Error("Function not implemented.")
// }

