import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ComponentHeader from './components/ComponentHeader'
import { FAB } from '@rneui/themed';
import Colors from '../domain/Colors'
import { useNavigation } from '@react-navigation/native';

const ViewComplaints = () => {

    const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex:1}}>
        <ComponentHeader name_app='Denuncias'>
        </ComponentHeader>
      <View style={{flex: 1}}>
            
            <FAB
                visible={true}
                icon={{ name: 'add', color: 'white' }}
                color={Colors.RED}
                onPress={()=> navigation.navigate("RegisterComplaint")}
                style={{ position: 'absolute', bottom: 40, right: 20,
                width: 60,  // Ajusta el ancho según tus necesidades
                height: 60, // Ajusta la altura según tus necesidades
                }} // Ajusta los valores de bottom y right según tus necesidades
            />
      </View>
    </SafeAreaView>
  )
}

export default ViewComplaints