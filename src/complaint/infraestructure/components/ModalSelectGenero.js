import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, Button, useWindowDimensions } from 'react-native'; // Importa ScrollView
import Modal from 'react-native-modal';
import { Input, Icon } from '@rneui/themed';
import useModal from '../../application/UseModal';
import Colors from '../../domain/Colors';

const ModalSelectGenero = ({ title_select, options, onOptionSelect, labelSelect, value_id }) => {

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
        animationType="slide"
        transparent={true}
        onRequestClose={modalSelect.handleCloseModal}
      >
      <TouchableWithoutFeedback onPress={modalSelect.handleCloseModal}>
        <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.WHITE, borderRadius: 20, paddingHorizontal: 20 }}>
          <View style={{ flex: 1 }}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Genero</Text>
          </View>
          <View style={{ flex: 8, flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent:'center' }}>

              <TouchableOpacity onPress={() => handleOptionSelect({ id: 1, label: 'Masculino' })}>
                <Image
                  source={require("../../../domain/assets/imgGenero/genero.png")}
                  style={{ width: '90%', height: '90%' }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent:'center' }}>

              <TouchableOpacity onPress={() => handleOptionSelect({ id: 3, label: 'Otro' })}>
                <Image
                  source={require("../../../domain/assets/imgGenero/generoOtro.png")}
                  style={{ width: '90%', height: '90%' }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent:'center' }}>
              <TouchableOpacity onPress={() => handleOptionSelect({ id: 2, label: 'Femenino' })}>
                <Image
                  source={require("../../../domain/assets/imgGenero/generoFemenino.png")}
                  style={{ width: '90%', height: '90%' }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>

        </View>
      </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

export default ModalSelectGenero;
