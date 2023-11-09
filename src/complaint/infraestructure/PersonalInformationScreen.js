import { View, Text, ScrollView, TouchableOpacity  } from 'react-native'
import React, { useState } from 'react'
import ComponentHeader from './components/ComponentHeader'
import DataModal from '../domain/DataModal'
import useModal from '../application/UseModal'
import InputText from './InputText'
import SelectModal from './ModalSelect'
import UseSelected from '../application/UseSelected'
import ButtonComponent from './ButtonComponent'
import Colors from '../domain/Colors'

const PersonalInformationScreen = ({register_Data, nextButtonPressed, antButtonPressed}) => {

    const selectNacionality = UseSelected();    
    const nativeLanguage = UseSelected();    

    return (
        <View style={{ backgroundColor: 'white', marginTop: 3, flex:1}}>

            <InputText title={'Nombre'} placeHolder={'Joel Matias'} errorMessage='' inputChangeValue={(value)=>register_Data.setNombre(value)} />
            <InputText title={'Apellido'} placeHolder={'Fernandez de las casas'} errorMessage='' inputChangeValue={(value)=>register_Data.setApellido(value)}/>

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
                        value_id={(value_id)=> register_Data.setGenero(value_id)}
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
                        value_id={(value_id)=> register_Data.setFechas_nacimiento(value_id)}
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
                        value_id={(value_id)=> register_Data.setNacionalidad_id(value_id)}
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
                        value_id={(value_id)=> register_Data.setIdioma_id(value_id)}
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
                        value_id={(value_id)=> register_Data.setAltura(value_id)}
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
                        value_id={(value_id)=> register_Data.setPeso(value_id)}
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
                        value_id={(value_id)=> register_Data.setColor_cabello(value_id)}
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
                        value_id={(value_id)=> register_Data.setColor_ojos(value_id)}
                    />
            </View>
            
            <InputText title={'Cicatrices'} placeHolder={'cicatriz en la frente con forma de rayo'} errorMessage='' inputChangeValue={(value)=>register_Data.setCicatriz(value)} />
            
            <InputText title={'Tatuajes'} placeHolder={'Tatuaje en la espalda forma de cobra'} errorMessage='' inputChangeValue={(value)=>register_Data.setTatuaje(value)} />

            <View style={{flexDirection:'row'}}>
                <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                    <ButtonComponent nameButton='CANCELAR' colorButton={Colors.GREEN}
                    buttonPressed={antButtonPressed} />
                </View>
                <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                    <ButtonComponent nameButton='SIGUIENTE' colorButton={Colors.RED} 
                    buttonPressed={nextButtonPressed} />
                </View>
            </View>

        </View>
  )
}

export default PersonalInformationScreen