import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Button, useWindowDimensions } from 'react-native'; // Importa ScrollView
import Modal from 'react-native-modal';
import { Input, Icon } from '@rneui/themed';
import useModal from '../../application/UseModal';
import Colors from '../../domain/Colors';
import { Dimensions } from 'react-native';

const ModalSelectGenero = ({ title_select, options, onOptionSelect, labelSelect, value_id }) => {

  const width = Dimensions.get("window").width;

  const modalSelect = useModal(false);

  const handleOptionSelect = (option) => {
    onOptionSelect(option);
    modalSelect.handleCloseModal();
    value_id(option.id);
  };
  const images = [
    { id: 1, url: 'URL_DE_LA_IMAGEN_1' },
    { id: 2, url: 'URL_DE_LA_IMAGEN_2' },
    { id: 3, url: 'URL_DE_LA_IMAGEN_3' },
  ];

  return (

    <View style={{ marginHorizontal: 20, flex: 1 }}>
      <Text style={{fontWeight: 'bold'}}>{title_select}</Text>
      <TouchableOpacity onPress={modalSelect.showAgain}>
        <Input
          placeholder={labelSelect}
          rightIcon={{ type: 'font-awesome', name: 'arrow-down' }}
          editable={false}
        />
      </TouchableOpacity >
      <Modal isVisible={modalSelect.visible}
        animationType="slide"
        transparent={true}
        onRequestClose={()=>console.log('tocaaaa')}
      >
          <View style={{width:width-30, height: 350, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.WHITE, borderRadius: 20 }}>
              <View style={{ flex: 9, flexDirection:'row'}}> 
                <View style={{ flex: 1}}>  
                
                  <TouchableOpacity onPress={()=>handleOptionSelect({ id: 1, label: 'Masculino' })}>
                    <Image
                      source={require("../../../domain/assets/imgGenero/genero.png")}
                      style={{ width: '90%', height: '90%' }}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1}}> 
                
                  <TouchableOpacity onPress={()=>handleOptionSelect({ id: 3, label: 'Otro' })}>
                    <Image
                      source={require("../../../domain/assets/imgGenero/generoOtro.png")}
                      style={{ width: '90%', height: '90%' }}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ flex: 1}}>   
                  <TouchableOpacity onPress={()=>handleOptionSelect({ id: 2, label: 'Femenino' })}>
                    <Image
                      source={require("../../../domain/assets/imgGenero/generoFemenino.png")}
                      style={{ width: '90%', height: '90%' }}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                </View>
              </View>
             
          </View>
      </Modal>
    </View>
  );
}

export default ModalSelectGenero;
