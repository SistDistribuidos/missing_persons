import { View, Text } from 'react-native'
import React from 'react'
import AuthenticatedApp from './AuthenticatedApp'



const AuthNavigator = () => {
  return (
    <View style={{flex:1}}>
        <AuthenticatedApp />
    </View>
  )
}

export default AuthNavigator