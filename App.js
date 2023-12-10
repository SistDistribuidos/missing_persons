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

export default function App() {


  const { registerForPushNotificationsAsync, handleNotificationResponse } = getNotifications;
  useEffect(() => { 
    registerForPushNotificationsAsync();
    Notifications.setNotificationHandler({
      handleNotification: async (notification) =>{
        console.log('se recibio una notificacion, mientras estoy abierta')
        return  { 
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: true,
        };
      }
    });

    const responseListener = 
    Notifications.addNotificationResponseReceivedListener(
      handleNotificationResponse
      );

      return () => {
        Notifications.removeNotificationSubscription(responseListener);
      }

  },[]);

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
