import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Dimensions  } from 'react-native'; // Importa ScrollView
import Modal from 'react-native-modal';
import { Input, Icon } from '@rneui/themed';
import useModal from '../../application/UseModal';

const ModalAddContacts = ({ title_select, options, onOptionSelect, labelSelect, value_id }) => {

  const screenWidth = Dimensions.get('window').width;

  const modalSelect = useModal(false);

  const handleOptionSelect = (option) => {
    onOptionSelect(option);
    modalSelect.handleCloseModal();
    value_id(option.id);
  };

  return (

    <View style={{ marginHorizontal: 20, flex: 1 }}>
      <Text style={{ fontWeight: 'bold' }}>{title_select}</Text>
      <TouchableOpacity onPress={modalSelect.showAgain}>
        <Input
          placeholder={labelSelect}
          rightIcon={{ type: 'font-awesome', name: 'arrow-down' }}
          editable={false}
          value={labelSelect== 'Seleccione'? '': labelSelect}
        />
        
      </TouchableOpacity >


      <Modal
        isVisible={modalSelect.visible}
        transparent={true}
        onRequestClose={modalSelect.handleCloseModal}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={modalSelect.handleCloseModal}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

export default ModalAddContacts;
