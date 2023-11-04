import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ComplaintScreen from './src/complaint/infraestructure/PersonalInformationScreen';
import MenuComplaintScreen from './src/complaint/infraestructure/MenuComplaintScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <StatusBar style="light" backgroundColor="#FF0000" />
      <MenuComplaintScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
