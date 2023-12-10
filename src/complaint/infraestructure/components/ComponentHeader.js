import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Icon } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import Colors from '../../domain/Colors';
import * as Animatable from "react-native-animatable";
import { logout } from '../../../application/services/ValuesService';
//para redux
import {useSelector, useDispatch} from 'react-redux'
import { setAuthentication} from '../../../loggin/redux/Actions';
import { deleteValueForToken } from '../../../application/secureStore/ExpoSecureStore';

const ComponentHeader = ({name_app}) => {
  const dispatch = useDispatch();
  const {authentication} = useSelector(state=> state.userReducer);
  const deleteToken =()=>{
    let varSave = deleteValueForToken().then( (response) => {
        console.log('luego de eliminar lo que tiene secure expo ',response);
    })
    .catch( error =>{
        console.log('Ocurrio un error al eliminar lo de expo secure store => ' ,error);
    });
  }
  const exit = () => {
    logout(authentication).then((data) => {
      console.log('todo bien al cerrar sesion ', data, data.message ,data.message === "Unauthenticated.");
      if (data.success) {
        deleteToken();
        dispatch(setAuthentication(false))
      }else if(data.message === "Unauthenticated."){
        deleteToken();
        dispatch(setAuthentication(false))
      }

    }).catch((error) => {
      console.log('en error de exit', error);
    });
  };

  return (
    <View style={{width: '100%', height: 45, backgroundColor:Colors.RED}}>
      <View style={{flex:1, flexDirection: 'row'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginBottom: -30}}>

        </View>

        <Animatable.View style={{flex: 2.5, justifyContent: 'center', alignItems: 'center'}} animation="pulse" easing="ease-out" iterationCount="infinite">
            <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>{name_app}</Text>
        </Animatable.View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
            {/* <Ionicons name="md-notifications" size={25} color="white" onPress={() => console.log('hello')}/> */}
            <Ionicons name="md-exit" size={25} color="white" onPress={() => {console.log('hello'), exit()}}/>
        </View>
      </View>
    </View>
  )
}

export default ComponentHeader