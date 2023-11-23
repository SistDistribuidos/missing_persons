import { View, Text } from 'react-native'
import React, { useState } from 'react'
import MapView, {Marker} from 'react-native-maps';
import Colors from '../../domain/Colors';

const MapaWithUbication = ({latitude, longitude}) => {
    console.log(latitude, longitude);
    const [ubicationInit, setUbicationInit] = useState({
        latitude: latitude,
        longitude: longitude,
        // latitude: -17.776528,
        // longitude: -63.195123,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })
  return (
    <View style={{width: 290, height: 250, justifyContent: 'center', alignItems: 'center', borderRadius: 25, overflow: 'hidden', borderColor: Colors.BLACK_DEGRADADO, borderWidth: 2}}>
      <MapView style={{ width: '100%', height: '100%'}}
                        initialRegion={ubicationInit}
                    >
                        <Marker coordinate={ubicationInit} title='Ubicación seleccionada' />
                    </MapView>
    </View>
  )
}

export default MapaWithUbication