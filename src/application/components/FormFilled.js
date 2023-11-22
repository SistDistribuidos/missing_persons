import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import Colors from '../../complaint/domain/Colors';

const FormFilled = ({ visible, onClose, onAccept, title, description }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>

          <LottieView
            source={require('../../domain/img_animated/formfilled.json')}
            autoPlay
            loop
            style={{ width: 125, height: 125 }}
            resizeMode="cover"
          />

          <Text style={styles.modalText}>{description}</Text>
          <View style={styles.buttonContainer}>
           
            <TouchableOpacity 
              title="Aceptar"
              onPress={onAccept}
              style={{
                backgroundColor: Colors.RED,
                paddingHorizontal: 20,
                paddingVertical: 10,
                alignItems: 'center',
                borderRadius: 5,
                margin: 10,}}
            >
              <Text style={{ color: 'white', fontWeight: 'bold'}}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  titleContainer: {
    fontSize: 30,
    paddingBottom: 10,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.RED,
    textAlign: 'center'
  },
  modalText: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonSeparator: {
    width: 10, // Espacio entre los botones
  },
});

export default FormFilled;
