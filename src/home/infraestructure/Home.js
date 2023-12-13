import { View, Text, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ComponentHeader from '../../complaint/infraestructure/components/ComponentHeader'
import Colors from '../../complaint/domain/Colors'
import ComplaintScreen from '../../complaint/infraestructure/ComplaintScreen'
import Filter from './component/Filter'
import ViewMissingsPersons from '../../complaint/infraestructure/ViewMissingsPersons'
import helper from '../../domain/helper'
import { getReport } from '../../application/services/ValuesService'
import * as Notifications from "expo-notifications"
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setNotificationDenuncia } from '../../loggin/redux/Actions'

const Home = () => {

  const [modal_visible, setModal_visible] = useState(false)

  const [data, setData] = useState({});

  const onPress = async (complaint) => {
    try {
      const report = await obtainReport(complaint, 0);
      setModal_visible(true);
    } catch (error) {
      ToastAndroid.show('Ocurrio un error durante la consulta', ToastAndroid.SHORT);
    }
  }

  const obtainReport = async (value, time) => {
    try {
      const report = await getReport(value);
      if (report) {
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
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { denuncia } = useSelector(state => state.userReducer);
  useEffect(() => {
    const handleNotification = (listener) => {
      const nroDenuncia = listener.notification.request.content.data.denunciaId;
      const newValue = !denuncia;
      dispatch(setNotificationDenuncia(newValue));
      console.log("he desatado mi evento ", newValue);
      navigation.navigate("Complaints", {
        screen: "ComplaintScreen", params: {
          denunciaId: nroDenuncia,
        }
      });

    }
    const responseListener =
      Notifications.addNotificationResponseReceivedListener(
        handleNotification
      );
    return () => {
      Notifications.removeNotificationSubscription(responseListener);
    }
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ComponentHeader name_app='Home'></ComponentHeader>
      <Filter></Filter>

      <ViewMissingsPersons
        modal_visible={modal_visible}
        close_modal={() => setModal_visible(false)}
        data_complaint={data}
        is_home={true}
      >
      </ViewMissingsPersons>

      <ComplaintScreen complaint_id={onPress} />
    </SafeAreaView>
  )
}

export default Home