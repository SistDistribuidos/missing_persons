import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ComponentHeader from './components/ComponentHeader'
import { FAB } from '@rneui/themed';
import Colors from '../domain/Colors'
import { useNavigation } from '@react-navigation/native';
import ButtonInformation from './components/ButtonInformation';
import ViewMissingPersonsRecords from './ViewMissingPersonsRecords';
import ViewMissingsPersons from './ViewMissingsPersons';
import { useState } from 'react';
import helper from '../../domain/helper';

const ViewComplaints = () => {
  const [modal_visible, setModal_visible] = useState(false)
  const navigation = useNavigation();
  let data = { 
      id: 1,
      nombre: 'juan',
      apellido: 'palito de tal',
      genero: 1,
      fecha_nacimiento: '2023-11-21',
      edad: '13',
      altura: '1.2',
      peso: '1.2',
      cicatriz: 'No tiene',
      tatuaje: 'No tiene',
      direccion: 'A la universidad uagrm',
      color_cabello: 'Negro',
      color_ojos: 'Negro',
      fecha_desaparicion: '2023-11-07',
      hora_desaparicion: '15:20:00',
      ultima_ropa_puesta: 'No tiene',
      ubicacion: '1.2',
      user_id: '1.2',
      nacionalidad_id: 'Argentino',
      nacionalidad_code: 'AR',
      documento_id: '1.2',
      idioma_id: '1.2',
      estado: '1.2',
      contacto: '77598315',
      enfermedades: 'Sufre del corazon',
      latitude: -17.776528,
      longitude: -63.195123,
      imagen1: helper.IMAGE_RANDOM,
      imagen2: helper.IMAGE_RANDOM,

    };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ComponentHeader name_app='Denuncias'>
      </ComponentHeader>
      
      <View style={{ flex: 1 }}>
        
        <View style={{ flex: 1, margin: 15 }}>
          <ButtonInformation title="Qhe hacer en estos casos?" clickButtonNext={() => {console.log('funcionaaaaaaaaaaaaaa')}} />
        </View>

        <ViewMissingsPersons 
          modal_visible={modal_visible}
          close_modal={()=> setModal_visible(false)}
          data_complaint={data}
        >

        </ViewMissingsPersons>

        <View style={{ flex: 15 }}>

          <ViewMissingPersonsRecords complaint_id={(complaint_id) => setModal_visible(true)}></ViewMissingPersonsRecords>
          <FAB
            visible={true}
            icon={{ name: 'add', color: 'white' }}
            color={Colors.RED}
            onPress={() => navigation.navigate("RegisterComplaint")}
            style={{
              position: 'absolute', bottom: 40, right: 20,
              width: 60,  // Ajusta el ancho según tus necesidades
              height: 60, // Ajusta la altura según tus necesidades
            }} // Ajusta los valores de bottom y right según tus necesidades
          />
        </View>

      </View>
    </SafeAreaView>
  )
}

export default ViewComplaints