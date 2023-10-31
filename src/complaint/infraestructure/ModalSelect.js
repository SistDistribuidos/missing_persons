import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'; // Importa ScrollView
import Modal from 'react-native-modal';

const SelectModal = ({ isVisible, options, onOptionSelect, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onOptionSelect(option);
    onClose();
  };

  return (
    <Modal isVisible={isVisible}>
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
  );
}

export default SelectModal;
