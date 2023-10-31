import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ComplaintScreen from './src/complaint/infraestructure/ComplaintScreen';
import MenuComplaintScreen from './src/complaint/infraestructure/MenuComplaintScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>probando app</Text> */}
      <MenuComplaintScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
