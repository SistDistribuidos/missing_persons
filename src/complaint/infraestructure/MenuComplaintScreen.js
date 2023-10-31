import { View, Text, ScrollView, TouchableOpacity, StyleSheet   } from 'react-native'
import React, { useState } from 'react'
import ComponentHeader from './ComponentHeader'
import ModalSwal from './ModalSwal'
import DataModal from '../domain/DataModal'
import useModal from '../application/UseModal'
import InputText from './InputText'
import SelectModal from './ModalSelect'
import UseSelected from '../application/UseSelected'
import ComplaintScreen from './ComplaintScreen'
import ComplaintScreen2 from './ComplaintScreen2'
import FilesScreen from './FilesScreen'
import ComplaintRegisterData from '../domain/ComplaintRegisterData'

const MenuComplaintScreen = () => {

    const [viewMenu, setViewMenu] = useState(1)

    const data_complaint_register = new ComplaintRegisterData();

    return (
    <ScrollView  style={{flex: 1}}>
        
        <ComponentHeader name_app={'REGISTRO DENUNCIA'} />

        <View style={{ flexDirection: 'row',padding:15}}>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center', alignContent:'center', backgroundColor:'red', borderTopLeftRadius:25, borderBottomLeftRadius:25, padding: 15}}>
                <TouchableOpacity onPress={()=> {console.log('Informacion'), setViewMenu(1)}}>
                    <Text style={{color:'white', fontSize: 20, fontWeight:'bold'}}>Informacion</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center', alignContent:'center', backgroundColor:'green', borderTopRightRadius:25, borderBottomRightRadius:25, padding: 15}}>
                <TouchableOpacity onPress={()=> {console.log('Archivossssssssssssssssss', data_complaint_register), setViewMenu(2)}}>
                    <Text style={{color:'white', fontSize: 20, fontWeight:'bold'}}>Archivos</Text>
                </TouchableOpacity>
            </View>
        </View>
        <ComplaintScreen register_Data={data_complaint_register}/>
        <ComplaintScreen2 register_Data={data_complaint_register}/>
        <FilesScreen />


    </ScrollView >
  )
}
export default MenuComplaintScreen