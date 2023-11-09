import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../domain/Colors'
import { Dimensions } from 'react-native';

const ButtonNext = ({clickButtonNext, title}) => {
    const { width, height } = Dimensions.get('window');
  return (
    <View >
        <View style={{justifyContent: 'center', alignItems: 'center',borderRadius: 20}}>
            <TouchableOpacity onPress={clickButtonNext}>
            <Text style={[styles.buttonNextStyle, {paddingHorizontal: 100} ]}>{title}</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonNextStyle: {
        paddingVertical:10, 
        color: Colors.WHITE, 
        fontWeight:'bold', 
        fontSize: 18, 
        backgroundColor: Colors.GREEN, 
        borderRadius: 20, 
        // paddingHorizontal: (width/4) 
        // Propiedades de sombra
        shadowColor: Colors.GREEN, 
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity:1,
        shadowRadius: 5,
        elevation: 10, // Solo para Android
    },
});
export default ButtonNext