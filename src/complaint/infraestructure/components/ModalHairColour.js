import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'; // Importa ScrollView
import Modal from 'react-native-modal';
import { Input, Icon } from '@rneui/themed';
import useModal from '../../application/UseModal';
import Colors from '../../domain/Colors';


const ImageViewHairColour = ({ title, imagePath, onOptionSelect, option }) => {
  console.log('=========>> ', title, imagePath);
  // const imagePathColor = "../../../domain/assets/hair/Rojo.png";
  const handleOptionSelect =()=>{
    onOptionSelect(option);
  }
  return (
    <TouchableOpacity
      onPress={() => handleOptionSelect(option)}>
      <Image
        source={imagePath}
        style={{ width: '90%', height: '90%' }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}


const ModalHairColour = ({ title_select, options, onOptionSelect, labelSelect, value_id }) => {

  const imagePathColor = {
    Rojo: require("../../../domain/assets/hair/Rojo.png"),
    Azul: require("../../../domain/assets/hair/Azul.png"),
    Verde: require("../../../domain/assets/hair/Verde.png"),
    Amarillo: require("../../../domain/assets/hair/Amarillo.png"),
    Blanco: require("../../../domain/assets/hair/Blanco.png"),
    Negro: require("../../../domain/assets/hair/Negro.png"),
    Naranja: require("../../../domain/assets/hair/Naranja.png"),
    Rosado: require("../../../domain/assets/hair/Rosado.png"),
    Gris: require("../../../domain/assets/hair/Gris.png"),
    Morado: require("../../../domain/assets/hair/Morado.png"),
    Cafe: require("../../../domain/assets/hair/Cafe.png"),
  };
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
          value={labelSelect == 'Seleccione' ? '' : labelSelect}
        />
      </TouchableOpacity >


      <Modal
        isVisible={modalSelect.visible}
        transparent={true}
        onRequestClose={modalSelect.handleCloseModal}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={modalSelect.handleCloseModal}>
          <View style={{ flex: 1, backgroundColor: Colors.WHITE, borderRadius: 30, maxHeight: 500 }}>
            <View style={{ flex: 1 }}>
              <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', fontFamily: 'serif', margin: 15 }}>{title_select}</Text>
            </View>
            {/* <ScrollView style={{maxHeight: 500}}> */}
            <View style={{ flex: 8 }}>

              <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 15 }}>
                <View
                  style={{ flex: 1, justifyContent: 'center' }}>
                  <ImageViewHairColour title={'Rojo'} imagePath={imagePathColor['Rojo']} onOptionSelect={(val)=> handleOptionSelect(val)} option={{id: 1, label: 'Rojo'}}  />
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <ImageViewHairColour title={'Azul'} imagePath={imagePathColor['Azul']}  onOptionSelect={(val)=> handleOptionSelect(val)} option={{id: 2, label: 'Azul'}} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <ImageViewHairColour title={'Verde'} imagePath={imagePathColor['Verde']}  onOptionSelect={(val)=> handleOptionSelect(val)} option={{id: 3, label: 'Verde'}} />
                </View>
              </View>

              <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 15 }}>
                <View
                  style={{ flex: 1, justifyContent: 'center' }}>
                  <ImageViewHairColour title={'Amarillo'} imagePath={imagePathColor['Amarillo']}  onOptionSelect={(val)=> handleOptionSelect(val)} option={{id: 4, label: 'Amarillo'}} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <ImageViewHairColour title={'Blanco'} imagePath={imagePathColor['Blanco']}  onOptionSelect={(val)=> handleOptionSelect(val)} option={{id: 5, label: 'Blanco'}} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <ImageViewHairColour title={'Negro'} imagePath={imagePathColor['Negro']}  onOptionSelect={(val)=> handleOptionSelect(val)} option={{id: 6, label: 'Negro'}} />
                </View>

              </View>
              <View style={{ flex: 1, flexDirection: 'row', marginHorizontal: 15 }}>
                <View
                  style={{ flex: 1, justifyContent: 'center' }}>
                  <ImageViewHairColour title={'Rosado'} imagePath={imagePathColor['Rosado']}  onOptionSelect={(val)=> handleOptionSelect(val)} option={{id: 8, label: 'Rosado'}} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <ImageViewHairColour title={'Cafe'} imagePath={imagePathColor['Cafe']}  onOptionSelect={(val)=> handleOptionSelect(val)} option={{id: 11, label: 'Cafe'}} />
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <ImageViewHairColour title={'Morado'} imagePath={imagePathColor['Morado']}  onOptionSelect={(val)=> handleOptionSelect(val)} option={{id: 10, label: 'Morado'}} />
                </View>

              </View>
            </View>
            {/* </ScrollView> */}
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

export default ModalHairColour;
