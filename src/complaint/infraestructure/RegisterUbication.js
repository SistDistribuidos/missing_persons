import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Icon } from '@rneui/themed';
import ModalRegisterMaps from './ModalRegisterMaps';

const RegisterUbication = () => {
    const [visibilityUbicationModal, setVisibilityUbicationModal] = useState(false)
  return (
    <View style={{flex:1}}>
        <ModalRegisterMaps visible={visibilityUbicationModal} onClose={()=> setVisibilityUbicationModal(false)}></ModalRegisterMaps>

        <View style={{flex:1}}>
            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Subir Ubicación</Text>
        </View>
        <View style={{flex:10, justifyContent: 'center', alignItems: 'center'}}>
            <Icon
                raised
                name='map-marker'
                type='font-awesome'
                color='#f50'
                onPress={() => {console.log('hello'), setVisibilityUbicationModal(true)}} 
                size={80}
                />
        </View>
    </View>
  )
}

export default RegisterUbication