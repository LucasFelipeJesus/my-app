import { View, Text, StyleSheet } from 'react-native';
import Camera from '../../camera';

export default function Tab() {
    return (
        <View style={styles.container}>
            <Text>Camera</Text>
            <Camera />
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
