import { StyleSheet, View } from "react-native"
import { Text } from 'react-native-paper'
import { Accelerometer, Gyroscope } from "expo-sensors"
import { useState } from "react"
import { Link } from "expo-router"



export default function Sensors() {
    const [gdata, setGData] = useState({ x: 0, y: 0, z: 0 })
    const [adata, setAData] = useState({ x: 0, y: 0, z: 0 })

    Gyroscope.setUpdateInterval(1000) //tempo de update
    Gyroscope.addListener((data) => {  //adiciona um listener o que vai fazer
        setGData(data)
    })

    Accelerometer.setUpdateInterval(5000) //tempo de update
    Accelerometer.addListener((data) => {  //adiciona um listener o que vai fazer
        setAData(data)
    })
    return (

        <View style={styles.container}>
            <Text>Sensors</Text>
            <Text> </Text>
            <Text>Gyroscope</Text>
            <Text>X: {gdata.x.toFixed(4)}</Text>
            <Text>Y: {gdata.y.toFixed(4)}</Text>
            <Text>Z: {gdata.z.toFixed(4)}</Text>
            <Text>Accelerometer</Text>
            <Text>X: {adata.x.toFixed(4)}</Text>
            <Text>Y: {adata.y.toFixed(4)}</Text>
            <Text>Z: {adata.z.toFixed(4)}</Text>

            <Link style={{ marginTop: 30 }} href="./pages/home">  Home </Link>

        </View>)

}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    mt20: {
        marginTop: 20,
    },
})
