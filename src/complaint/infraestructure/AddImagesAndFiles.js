import { View, StyleSheet } from 'react-native'
import React from 'react'
import ButtonNext from './components/ButtonNext'
import Colors from '../domain/Colors'
import UploadPhoto from './UploadPhoto'
import RegisterUbication from './RegisterUbication'

const AddImagesAndFiles = () => {
    return (

        <View style={{ flex: 1 }}>
            <View style={styles.card}>
                <View style={{ flex: 10 }}>
                    <View style={{ flex: 1}}>
                        <UploadPhoto />
                    </View>
                    <View style={{ flex: 1 }}>
                        <RegisterUbication />
                    </View>
                </View>
                <View style={{ marginBottom: -15 }}>
                    <ButtonNext title="Enviar" />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1, 
        backgroundColor: Colors.FONDO, 
        margin: 20, 
        borderRadius: 20,
        paddingTop: 15,
        // Propiedades de sombra
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 10, // Solo para Android
    },
});
export default AddImagesAndFiles