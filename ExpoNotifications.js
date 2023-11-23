import { Platform, ToastAndroid, Linking } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

// Can use this function below OR use Expo's Push Notification Tool from: https://expo.dev/notifications
async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}
 
async function registerForPushNotificationsAsync() {
  let token; 
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') { 
        try {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status; 
        } catch (error) {
            const status = 'granted';
            finalStatus = status; 
        }

    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    try {
        token = (await Notifications.getExpoPushTokenAsync({
            projectId: process.env.EXPO_PUBLIC_PROJECT_ID
        })).data;
        console.log(token);
    } catch (error) {
        token = null;
    }

  } else {
    alert('Must use physical device for Push Notifications');
  }

  
  if (Platform.OS === 'android') {
     Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }



  return token;
}

  const handleNotificationResponse = (response) => {
    console.log('Aqui el manejador de elementos');
    const data = response.notification.request.content;
    console.log(JSON.stringify(data));
    console.log(response)
    if (data?.url) Linking.openURL(data.url);
   };

const getNotifications =  {
    registerForPushNotificationsAsync,
    handleNotificationResponse,
    sendPushNotification
}

export default getNotifications;
