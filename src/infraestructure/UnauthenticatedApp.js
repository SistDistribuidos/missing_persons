import { View, Text } from 'react-native'
import React from 'react'
import NavigationUnauthenticated from '../application/NavigationUnauthenticated'

const UnauthenticatedApp = () => {
  return (
    <View  style={{flex:1}}>
        <NavigationUnauthenticated />
    </View>
  )
}

export default UnauthenticatedApp