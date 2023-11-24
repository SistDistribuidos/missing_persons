import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ComponentHeader from './components/ComponentHeader'
import { FAB } from '@rneui/themed';
import Colors from '../domain/Colors'
import { useNavigation } from '@react-navigation/native';
import ButtonInformation from './components/ButtonInformation';
import ViewMissingPersonsRecords from './ViewMissingPersonsRecords';
import ViewMissingsPersons from './ViewMissingsPersons';
import { useState, useEffect } from 'react';
import helper from '../../domain/helper';
import { getReport } from '../../application/services/ValuesService';

const ViewComplaints = () => {
  const [modal_visible, setModal_visible] = useState(false)
  const navigation = useNavigation();
  const [data, setData] = useState({});

    const onPress = async (complaint) => {
      try {
        const report = await obtainReport(complaint, 0);
        setModal_visible(true);
      } catch (error) {
        ToastAndroid.show('Ocurrio un error durante la consulta', ToastAndroid.SHORT);
      }
    }

    const obtainReport = async(value, time) => {
      try {
        const report = await getReport(value);
        if (report){
          setData(report.datos);
        }
      } catch (error) {
        if (error instanceof Error && error.message.includes('timeout') && time < 3) {
          setTimeout(() => {
            obtainReport(value, time + 1);
          }, 5000);
        } else {
          ToastAndroid.show('No se pudo conectar con el server', ToastAndroid.SHORT);
        }
      }

    };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ComponentHeader name_app='Denuncias'>
      </ComponentHeader>
      
      <View style={{ flex: 1 }}>
        
        <View style={{ flex: 1, margin: 15 }}>
          <ButtonInformation title="¿Que hacer en estos casos?" clickButtonNext={() => {console.log('funcionaaaaaaaaaaaaaa')}} />
        </View>

        <ViewMissingsPersons 
          modal_visible={modal_visible}
          close_modal={()=> setModal_visible(false)}
          data_complaint={data}
        >

        </ViewMissingsPersons>

        <View style={{ flex: 15 }}>

          <ViewMissingPersonsRecords complaint_id={onPress}></ViewMissingPersonsRecords>
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