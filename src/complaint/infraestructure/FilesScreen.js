import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';

const FilesScreen = () => {
  return (
    <View style={{flex: 10, backgroundColor: 'white', marginTop:20, flexDirection: 'row'}}>
      <Icon
        raised
        name='camera'
        type='font-awesome'
        color='#f50'
        onPress={() => console.log('hello')} 
        size={80}
        />
         <Icon
        raised
        name='map-marker'
        type='font-awesome'
        color='#f50'
        onPress={() => console.log('hello')} 
        size={80}
        />
    </View>
  )
}

export default FilesScreen