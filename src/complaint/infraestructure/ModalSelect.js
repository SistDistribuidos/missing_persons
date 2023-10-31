import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'; // Importa ScrollView
import Modal from 'react-native-modal';
import { Input, Icon } from '@rneui/themed';
import useModal from '../application/UseModal';

const SelectModal = ({ title_select, options, onOptionSelect, labelSelect, value_id }) => {
  const modalSelect = useModal(false);

  const handleOptionSelect = (option) => {
    onOptionSelect(option);
    modalSelect.handleCloseModal();
    value_id(option.id);
  };

  return (

    <View style={{ marginHorizontal: 20, flex: 1 }}>
      <Text>{title_select}</Text>
      <TouchableOpacity onPress={modalSelect.showAgain}>
        <Input
          placeholder={labelSelect}
          rightIcon={{ type: 'font-awesome', name: 'arrow-down' }}
          editable={false}
        />
      </TouchableOpacity >
      <Modal isVisible={modalSelect.visible}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ScrollView style={{ backgroundColor: 'white', borderRadius: 10, padding: 20, maxHeight: 300 }}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.id}
                onPress={() => handleOptionSelect(option)}
              >
                <Text>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

export default SelectModal;
