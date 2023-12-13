import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComplaintScreen from './src/complaint/infraestructure/PersonalInformationScreen';
import MenuComplaintScreen from './src/complaint/infraestructure/MenuComplaintScreen';
import ViewComplaints from './src/complaint/infraestructure/ViewComplaints';
import Colors from './src/complaint/domain/Colors';
import AuthNavigator from './src/infraestructure/AuthNavigator';
import getNotifications from './ExpoNotifications';
import * as Notifications from "expo-notifications"
import { Provider } from 'react-redux';
import Store from './src/loggin/redux/Store';
import { saveTokenDevice } from './src/application/secureStore/ExpoSecureStore';

export default function App() {


  const { registerForPushNotificationsAsync, handleNotificationResponse } = getNotifications;
  useEffect(() => {
    obtainToken();
    Notifications.setNotificationHandler({
      handleNotification: async (notification) => {
        event();
        return {
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: true,
        };
      }
    });

    const event = () => {
      console.log('Esta notificacion se ejecuta cuando recibo una notificacion en primer plano');
    }

    const responseListener =
      Notifications.addNotificationResponseReceivedListener(
        handleNotificationResponse
      );

    return () => {
      Notifications.removeNotificationSubscription(responseListener);
    }

  }, []);
  const obtainToken = async () => {
    try {
      const value = await registerForPushNotificationsAsync();
      if (value) {
        console.log("El valor es " + value);
        const res = await saveTokenDevice(value);
        if (res) {
          console.log('Guardado satisfactoriamente')
        } else {
          console.log('Ocurrio un error');
        }
      }
      else {
        console.log('No hay valor alguno')
      }
    } catch (error) {
      console.log('Ocurrio un error');
    }
  }
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <StatusBar style="light" backgroundColor={Colors.RED} />
      {/* <ViewComplaints /> */}
      <Provider store={Store}>
        <AuthNavigator />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
