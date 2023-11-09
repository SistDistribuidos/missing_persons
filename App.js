import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ComplaintScreen from './src/complaint/infraestructure/PersonalInformationScreen';
import MenuComplaintScreen from './src/complaint/infraestructure/MenuComplaintScreen';
import ViewComplaints from './src/complaint/infraestructure/ViewComplaints';
import Colors from './src/complaint/domain/Colors';
import AuthNavigator from './src/infraestructure/AuthNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <StatusBar style="light" backgroundColor={Colors.RED} />
      {/* <ViewComplaints /> */}
      <AuthNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
