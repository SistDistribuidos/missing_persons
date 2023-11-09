import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Icon } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import Colors from '../../domain/Colors';

const ComponentHeader = ({name_app}) => {
  return (
    <View style={{width: '100%', height: 45, backgroundColor:Colors.RED}}>
      <View style={{flex:1, flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginBottom: -30}}>

        </View>

        <View style={{flex: 2.5, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>{name_app}</Text>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
            <Ionicons name="md-notifications" size={25} color="white" onPress={() => console.log('hello')}/>
        </View>
      </View>
    </View>
  )
}

export default ComponentHeader