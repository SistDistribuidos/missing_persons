import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'
//para redux
import {useSelector, useDispatch} from 'react-redux'
import { getValueForToken } from '../application/secureStore/ExpoSecureStore'
import { setAuthentication } from '../loggin/redux/Actions'
// end
const AuthNavigator = () => {

  const {authentication, user} = useSelector(state=> state.userReducer);
  const dispatch= useDispatch();
  let auth = authentication;
  useEffect(() => {
    console.log('root navigation',authentication, user, user.id)
    if(authentication== false){
      let varSave = getValueForToken().then( (response) => {
        // console.log('lo que tiene getValueForToken',response);
        dispatch(setAuthentication(response))
      }).catch( error =>{
        console.error('Ocurrio un error al obtener valor guardado, token => ' ,error);
      });
    }
  }, [])

  return (
    <View style={{flex:1}}>
        {auth ?
         <AuthenticatedApp />
        :
        <UnauthenticatedApp />
        }
    </View>
  )
}

export default AuthNavigator