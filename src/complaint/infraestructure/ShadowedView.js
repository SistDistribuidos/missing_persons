import React from 'react';
import { View, StyleSheet } from 'react-native';

const ShadowedView = () => {
  return (
    <View style={styles.shadowContainer}>
      {/* Contenido del View con sombra */}
    </View>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    width: 200, // Ancho deseado
    height: 100, // Alto deseado
    backgroundColor: 'white', // Color de fondo
    borderRadius: 10, // Radio de esquinas si es necesario
    // Propiedades de sombra
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    elevation: 10, // Solo para Android
  },
});

export default ShadowedView;
