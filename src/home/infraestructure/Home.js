import { View, Text, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ComponentHeader from '../../complaint/infraestructure/components/ComponentHeader'
import Colors from '../../complaint/domain/Colors'
import ComplaintScreen from '../../complaint/infraestructure/ComplaintScreen'
import Filter from './component/Filter'
import ViewMissingsPersons from '../../complaint/infraestructure/ViewMissingsPersons'
import helper from '../../domain/helper'

const Home = () => {

  const [modal_visible, setModal_visible] = useState(false)

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
    <SafeAreaView style={{flex:1}}>
      <ComponentHeader name_app='Home'></ComponentHeader>
      <Filter></Filter>
      
      <ViewMissingsPersons 
          modal_visible={modal_visible}
          close_modal={()=> setModal_visible(false)}
          data_complaint={data}
          is_home={true}
        >
        </ViewMissingsPersons>

      <ComplaintScreen  complaint_id={(complaint_id) => setModal_visible(true)} />
    </SafeAreaView>
  )
}

export default Home