import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import DataModal from '../domain/DataModal'
import useModal from '../application/UseModal'
import PersonalInformationScreen from './PersonalInformationScreen'
import DataAtTheTimeOfDisappearance from './DataAtTheTimeOfDisappearance'
import FilesScreen from './FilesScreen'
import ComplaintRegisterData from '../domain/ComplaintRegisterData'
import { SafeAreaView } from 'react-native-safe-area-context'
import InformationAndFilesButton from './InformationAndFilesButton'
import * as Animatable from 'react-native-animatable';
import ButtonComponent from './ButtonComponent'
import Colors from '../domain/Colors'
import ModalSwal from './components/ModalSwal'

const MenuComplaintScreen = () => {

    const [viewScreen, setViewScreen] = useState('information')

    const value_modal = new DataModal();
    value_modal.setTitle("NUEVA PUBLICACION !!!");
    value_modal.setDescription("Lamentamos mucho la situacion en la que te encuentras, esperamos que esto ayude a encontrar a esa persona para que puedas reunirte con ella en un futuro. ");
    const modalSwal = useModal(true);

    const data_complaint_register = new ComplaintRegisterData();
    
    return (
        <View style={{ flex: 1 }}>
            <ModalSwal
                visible={modalSwal.visible}
                onClose={modalSwal.handleCloseModal}
                onAccept={modalSwal.handleCloseModal}
                title={value_modal.getTitle()}
                description={value_modal.getDescription()}
            />

            <SafeAreaView >
                <InformationAndFilesButton selected_button={(val)=>setViewScreen(val)} />

                <ScrollView 
                style={{marginBottom: 70}}
                >
                    <Animatable.View 
                        animation={viewScreen==='information'? 'bounceInUp' : 'fadeOutUp'} duration={1500} 
                        style={{flex:1, display: viewScreen==='information'? 'flex' : 'none'}}
                        >
                        <PersonalInformationScreen register_Data={data_complaint_register} 
                            nextButtonPressed={()=> setViewScreen('DataAtTheTimeOfDisappearance')}
                            antButtonPressed={()=>console.log('boton cancelar presionado')}/>

                    </Animatable.View>
                    <Animatable.View 
                        animation={viewScreen==='DataAtTheTimeOfDisappearance'? 'bounceInUp' : 'fadeOutUp'} duration={1500} 
                        style={{flex:1, display: viewScreen==='DataAtTheTimeOfDisappearance'? 'flex' : 'none'}}
                        >
                        <DataAtTheTimeOfDisappearance register_Data={data_complaint_register} />

                    </Animatable.View>

                    <Animatable.View 
                        animation={viewScreen==='files'? 'bounceInUp' : 'fadeOutUp'} duration={1500} 
                        style={{flex:1, display: viewScreen==='files'? 'flex' : 'none'}}
                        >
                        <FilesScreen />

                    </Animatable.View>
                    
                    
                </ScrollView>
            
            </SafeAreaView>

        </View >
    )
}
export default MenuComplaintScreen