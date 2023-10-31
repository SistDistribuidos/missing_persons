import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ComplaintScreen from './src/complaint/infraestructure/ComplaintScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>probando app</Text> */}
      <ComplaintScreen />
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