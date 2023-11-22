import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Modal } from 'react-native'
import { Button } from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import Colors from '../domain/Colors';

const ModalRegisterMaps = ({ visible, onAccept, onClose, ubication_selected }) => {

    const [selectedLocation, setSelectedLocation] = useState(null);
    const [ubicationInit, setUbicationInit] = useState({
        latitude: -17.776528,
        longitude: -63.195123,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
    const handleMapPress = (event) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;
        console.log('ubicacion => ', latitude, longitude );
        setSelectedLocation({ latitude, longitude });
    };
    const ubicationSelected = (val) => {
        ubication_selected(selectedLocation);
        onClose()
    }
    return (
        <Modal transparent={true} visible={visible} animationType="slide">
            <View style={{ justifyContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.modalContainer}>
                    <MapView style={{ width: '100%', height: '100%' }}
                        initialRegion={ubicationInit}
                        onPress={handleMapPress}
                    >
                         {selectedLocation && (
                            <Marker
                                coordinate={selectedLocation}
                                title="Ubicación seleccionada"
                            />
                            )}
                        {/* <Marker coordinate={ubicationInit} title='Ubicación seleccionada' /> */}
                    </MapView>
                   
                    <View style={styles.buttonLeft}>
                        <Button title="Cancelar" onPress={onClose} color={Colors.RED}/>
                    </View>
                    <View style={styles.buttonRight}>
                        <Button title="Aceptar" onPress={(val) => ubicationSelected(val)} color={Colors.GREEN}/>
                    </View>
                </View>
                
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 50
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    modalText: {
        fontSize: 18,
    },
    buttonRight: {
        position: 'absolute',
        bottom: 20, // Ajusta la posición vertical según tus necesidades
        right: 20,   // Ajusta la posición horizontal según tus necesidades
    },
    buttonLeft: {
        position: 'absolute',
        bottom: 20, // Ajusta la posición vertical según tus necesidades
        left: 20,   // Ajusta la posición horizontal según tus necesidades
      },
});
export default ModalRegisterMaps