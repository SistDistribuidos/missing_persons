import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import {Entypo} from '@expo/vector-icons'
import Colors from '../../../complaint/domain/Colors'

const Button = ({title, icon, onPresss, color}) => {
    const presiona = ()=>{
        console.log('presiona');
        onPresss();
    }
  return (
    <TouchableOpacity style={styles.button} onPress={presiona}>
        <Entypo name={icon} size={28} color={Colors.WHITE} />
        <Text style={styles.text}> {title}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    button: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        fontWeight: 'bold',
        fontSize: 16,
        color: Colors.WHITE,
        marginLeft: 10
    }
})
export default Button