import { View, Text, ScrollView, TouchableOpacity  } from 'react-native'
import React, { useState } from 'react'
import ComponentHeader from './ComponentHeader'
import ModalSwal from './ModalSwal'
import DataModal from '../domain/DataModal'
import useModal from '../application/UseModal'
import InputText from './InputText'
import SelectModal from './ModalSelect'
import UseSelected from '../application/UseSelected'

const ComplaintScreen = () => {

    const value_modal = new DataModal();
    value_modal.setTitle("NUEVA PUBLICACION !!!");
    value_modal.setDescription("Lamentamos mucho la situacion en la que te encuentras, esperamos que esto ayude a encontrar a esa persona para que puedas reunirte con ella en un futuro. ");
    
    const modalSwal = useModal(true);

    const selectNacionality = UseSelected();    
    const nativeLanguage = UseSelected();    

    return (
    <ScrollView  style={{flex: 1}}>
        
        <ComponentHeader name_app={'APP NAME'} />

        <View style={{flex: 10, backgroundColor: 'white', marginTop:20}}>
            <ModalSwal
            visible={modalSwal.visible}
            onClose={modalSwal.handleCloseModal}
            onAccept={modalSwal.handleCloseModal}
            title={value_modal.getTitle()}
            description={value_modal.getDescription()}
            />

            <InputText title={'Nombre'} placeHolder={'Joel Matias'} errorMessage=''/>
            <InputText title={'Apellido'} placeHolder={'Fernandez de las casas'} errorMessage=''/>
            <View style={{flexDirection: 'row'}}>
                    <SelectModal
                        title_select='Sexo'
                        labelSelect={selectNacionality.selectedOption.label}
                        options={[
                        { id: 1, label: 'Boliviano' },
                        { id: 2, label: 'Español' },
                        { id: 3, label: 'Argentino' },
                        ]}
                        onOptionSelect={selectNacionality.handleOptionSelect}
                    />
                    <SelectModal
                        title_select='Fecha Nacimiento'
                        labelSelect={nativeLanguage.selectedOption.label}
                        options={[
                        { id: 1, label: 'Quechua' },
                        { id: 2, label: 'Español' },
                        { id: 3, label: 'Aymara' },
                        { id: 4, label: 'Frances' },
                        ]}
                        onOptionSelect={nativeLanguage.handleOptionSelect}
                    />
            </View>
            <View style={{flexDirection: 'row'}}>
                    <SelectModal
                        title_select='Nacionalidad'
                        labelSelect={selectNacionality.selectedOption.label}
                        options={[
                        { id: 1, label: 'Boliviano' },
                        { id: 2, label: 'Español' },
                        { id: 3, label: 'Argentino' },
                        ]}
                        onOptionSelect={selectNacionality.handleOptionSelect}
                    />
                    <SelectModal
                        title_select='Idioma Nativo'
                        labelSelect={nativeLanguage.selectedOption.label}
                        options={[
                        { id: 1, label: 'Quechua' },
                        { id: 2, label: 'Español' },
                        { id: 3, label: 'Aymara' },
                        { id: 4, label: 'Frances' },
                        ]}
                        onOptionSelect={nativeLanguage.handleOptionSelect}
                    />
            </View>
            <View style={{flexDirection: 'row'}}>
                    <SelectModal
                        title_select='Altura'
                        labelSelect={selectNacionality.selectedOption.label}
                        options={[
                        { id: 1, label: 'Boliviano' },
                        { id: 2, label: 'Español' },
                        { id: 3, label: 'Argentino' },
                        ]}
                        onOptionSelect={selectNacionality.handleOptionSelect}
                    />
                    <SelectModal
                        title_select='Peso'
                        labelSelect={nativeLanguage.selectedOption.label}
                        options={[
                        { id: 1, label: 'Quechua' },
                        { id: 2, label: 'Español' },
                        { id: 3, label: 'Aymara' },
                        { id: 4, label: 'Frances' },
                        ]}
                        onOptionSelect={nativeLanguage.handleOptionSelect}
                    />

            </View>
            <View style={{flexDirection: 'row'}}>
                    <SelectModal
                        title_select='Color cabello'
                        labelSelect={selectNacionality.selectedOption.label}
                        options={[
                        { id: 1, label: 'Boliviano' },
                        { id: 2, label: 'Español' },
                        { id: 3, label: 'Argentino' },
                        ]}
                        onOptionSelect={selectNacionality.handleOptionSelect}
                    />
                    <SelectModal
                        title_select='Color ojos'
                        labelSelect={nativeLanguage.selectedOption.label}
                        options={[
                        { id: 1, label: 'Quechua' },
                        { id: 2, label: 'Español' },
                        { id: 3, label: 'Aymara' },
                        { id: 4, label: 'Frances' },
                        ]}
                        onOptionSelect={nativeLanguage.handleOptionSelect}
                    />
            </View>
            
            <InputText title={'Cicatrices'} placeHolder={'cicatriz en la frente con forma de rayo'} errorMessage=''/>
            
            <InputText title={'Tatuajes'} placeHolder={'Tatuaje en la espalda forma de cobra'} errorMessage=''/>

        </View>


    </ScrollView >
  )
}

export default ComplaintScreen