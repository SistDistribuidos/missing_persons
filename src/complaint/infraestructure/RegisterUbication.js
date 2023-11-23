import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/themed';
import ModalRegisterMaps from './ModalRegisterMaps';
import MapaWithUbication from './components/MapaWithUbication';

const RegisterUbication = ({ ubication_selected, exist_ubication }) => {
  // console.log(exist_ubication);
  const [visibilityUbicationModal, setVisibilityUbicationModal] = useState(false)
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const get_ubication = (val) => {
    console.log('ubication ==>', val, val.latitude, val.longitude);
    setLatitude(val.latitude);
    setLongitude(val.longitude);
    ubication_selected();
  }
  return (
    <View style={{ flex: 1 }}>
      <ModalRegisterMaps visible={visibilityUbicationModal} onClose={() => setVisibilityUbicationModal(false)}
        ubication_selected={(val) => get_ubication(val)}
      ></ModalRegisterMaps>

      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Subir Ubicación</Text>
      </View>
      {exist_ubication === false ?
        <View style={{ flex: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Icon
            raised
            name='map-marker'
            type='font-awesome'
            color='#f50'
            onPress={() => { console.log('hello'), setVisibilityUbicationModal(true) }}
            size={80}
          />
        </View>
        :
        <View style={{ flex: 10, flexDirection: 'row' }}>
          <View style={{ flex: 1, marginLeft: 15 }}>
            {/* <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Ubicación donde desapareció: </Text> */}
            <MapaWithUbication 
            latitude={latitude}
            longitude={longitude}
          />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Icon
              raised
              name='map-marker'
              type='font-awesome'
              color='#f50'
              onPress={() => { console.log('hello'), setVisibilityUbicationModal(true) }}
              size={40}
            />
          </View>
        </View>
      }
    </View>
  )
}

export default RegisterUbication