import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Icon } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';

const ComponentHeader = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: '#CA1414', flexDirection: 'row'}}>
        {/* <StatusBar style="auto" /> */}
        <StatusBar style="light" backgroundColor="#FF0000" />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginBottom: -30}}>

        </View>

        <View style={{flex: 2.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 25}}>{props.name_app}</Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginBottom: -30}}>
            <Ionicons name="md-notifications" size={25} color="white" onPress={() => console.log('hello')}/>
        </View>

    </View>
  )
}

export default ComponentHeader