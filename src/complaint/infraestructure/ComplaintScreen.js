import { View, Text, SafeAreaView  } from 'react-native'
import React, { useState } from 'react'
import ComponentHeader from './ComponentHeader'
import ModalSwal from './ModalSwal'
import DataModal from '../domain/DataModal'
import useModal from '../application/UseModal'
import InputText from './InputText'
import SelectModal from './ModalSelect'
import useSelected from '../application/useSelected'

const ComplaintScreen = () => {

    const value_modal = new DataModal();
    value_modal.setTitle("NUEVA PUBLICACION !!!");
    value_modal.setDescription("Lamentamos mucho la situacion en la que te encuentras, esperamos que esto ayude a encontrar a esa persona para que puedas reunirte con ella en un futuro. ");
    
    const modalSwal = useModal();

    const modalSelect = useModal();
    // modalSelect.handleCloseModal();
    const selectedOption = useSelected();
    

    return (
    <SafeAreaView  style={{flex: 1}}>
        
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

            <View style={{backgroundColor: 'blue', flex: 1, flexDirection: 'row', justifyContent: 'center', alignContent: 'center'}}>
                <View style={{backgroundColor: 'yellow', flex: 1}}>

                {/* <SelectModal
                    isVisible={modalSelect.visible}
                    options={[
                    { id: 1, label: 'Opción 1' },
                    { id: 2, label: 'Opción 2' },
                    { id: 3, label: 'Opción 3' },
                    ]}
                    onOptionSelect={selectedOption.handleOptionSelect}
                    onClose={modalSelect.handleCloseModal}
                /> */}

                </View>
                <View style={{backgroundColor: 'green', flex: 1}}>
                <InputText title={'Nombre'} placeHolder={'Joel Matias'} errorMessage=''/>

                </View>

            </View>

        </View>


    </SafeAreaView >
  )
}

export default ComplaintScreen