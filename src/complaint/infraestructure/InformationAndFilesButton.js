import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import ShadowedView from './ShadowedView'

const InformationAndFilesButton = ({ selected_button }) => {

  return (
    <View style={{ flexDirection: 'row', paddingTop: 10, paddingHorizontal: 10, paddingBottom:2 }}>
      <View style={styles.simulatingButtonDesignLeft}>
        <TouchableOpacity onPress={() => selected_button('information')} >
          <Text style={styles.text}>Informacion</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.simulatingButtonDesignRight}>
        <TouchableOpacity onPress={() => { selected_button('files') }}>
          <Text style={[styles.text]}>Archivos</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const simulatingButtonDesign = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  padding: 15
};
const styles = StyleSheet.create({
  simulatingButtonDesignRight: {
    ...simulatingButtonDesign,
    backgroundColor: 'rgb(0, 160, 0)',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    padding: 15,
    // Propiedades de sombra
    shadowColor: 'green',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity:1,
    shadowRadius: 5,
    elevation: 10, // Solo para Android
  },
  simulatingButtonDesignLeft: {
    ...simulatingButtonDesign,
    backgroundColor: 'red',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    // Propiedades de sombra
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity:1,
    shadowRadius: 5,
    elevation: 10, // Solo para Android
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default InformationAndFilesButton