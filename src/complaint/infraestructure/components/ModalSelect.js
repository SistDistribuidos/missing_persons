import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Dimensions  } from 'react-native'; // Importa ScrollView
import Modal from 'react-native-modal';
import { Input, Icon } from '@rneui/themed';
import useModal from '../../application/UseModal';
import Flag from 'react-native-flags';

const SelectModal = ({ title_select, options, onOptionSelect, labelSelect, value_id }) => {

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
            <ScrollView style={{ backgroundColor: 'white', borderRadius: 10, margin: 20, maxHeight: 500
            }}>
              <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold', fontFamily: 'serif', margin: 15 }}>{title_select}</Text>
              <View style={{marginBottom: 10}}>
              {options.map((option, index) => (
                <TouchableOpacity
                  key={option.id}
                  onPress={() => handleOptionSelect(option)}
                >
                  <View style={{flexDirection: 'row', width: screenWidth - 70, backgroundColor: index % 2 ==0? 'rgba(255, 0, 0, 0.1)' : 'transparent' }}>

                      {option.code_icon!== undefined &&  <Flag code={option.code_icon} size={32} style={{marginHorizontal: 15}}/>}

                      <Text style={{ fontSize: 25, fontWeight: '500', fontFamily: 'serif', marginHorizontal: 15 }}>{option.label}</Text>
                  </View>
                </TouchableOpacity>
              ))}
              </View>
            </ScrollView>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

export default SelectModal;
