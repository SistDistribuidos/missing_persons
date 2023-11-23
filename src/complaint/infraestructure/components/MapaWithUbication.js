import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, {Marker} from 'react-native-maps';
import Colors from '../../domain/Colors';

const MapaWithUbication = ({latitude, longitude}) => {
  // console.log('mapwith ubication', latitude, longitude);

  return (
    <View style={{width: 290, height: 250, justifyContent: 'center', alignItems: 'center', borderRadius: 25, overflow: 'hidden', borderColor: Colors.BLACK_DEGRADADO, borderWidth: 2}}>
      <MapView style={{ width: '100%', height: '100%'}}
                        initialRegion={{latitude: latitude, longitude: longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421,}}
                    >
                        <Marker coordinate={{latitude: latitude, longitude: longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421,}} title='Ubicación seleccionada' />
                    </MapView>
    </View>
  )
}

export default MapaWithUbication