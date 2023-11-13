import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const ModalSwal = ({ visible, onClose, onAccept, title, description }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <Text style={styles.modalText}>{description}</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Cancelar"
              onPress={onClose}
              color="green" // Botón "Cancelar" en verde
            />
            <View style={styles.buttonSeparator} />
            <Button
              title="Aceptar"
              onPress={onAccept}
              color="red" // Botón "Aceptar" en rojo
            />
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
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 10,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
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

export default ModalSwal;
