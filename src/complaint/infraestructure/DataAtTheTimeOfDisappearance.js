import { View, Text } from 'react-native'
import React from 'react'
import InputText from './InputText'
import SelectModal from './ModalSelect'
import UseSelected from '../application/UseSelected'
import ButtonComponent from './ButtonComponent'
import Colors from '../domain/Colors'

const ComplaintScreen2 = ({register_Data, publishButtonPressed, backButtonPressed}) => {
    
    const selectNacionality = UseSelected();    
    const nativeLanguage = UseSelected();    

  return (
    <View style={{flex: 10, backgroundColor: 'white', marginTop:20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center', paddingBottom: 35}}>Datos de desaparicion</Text>
        
        <InputText title={'Donde se dirigia'} placeHolder={'Joel Matias'} errorMessage='' inputChangeValue={(value)=>register_Data.setDireccion(value)} />
        <View style={{flexDirection: 'row'}}>
                    <SelectModal
                        title_select='fecha'
                        labelSelect={selectNacionality.selectedOption.label}
                        options={[
                        { id: 1, label: 'Boliviano' },
                        { id: 2, label: 'Español' },
                        { id: 3, label: 'Argentino' },
                        ]}
                        onOptionSelect={selectNacionality.handleOptionSelect}
                    />
                    <SelectModal
                        title_select='hora'
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
            <InputText title={'Ultima ropa que traia puesta'} placeHolder={'Fernandez de las casas'} errorMessage='' inputChangeValue={(value)=>register_Data.setUltima_ropa_puesta(value)}/>
            <View style={{flexDirection: 'row'}}>
                    <SelectModal
                        title_select='Enfermedades'
                        labelSelect={selectNacionality.selectedOption.label}
                        options={[
                        { id: 1, label: 'Boliviano' },
                        { id: 2, label: 'Español' },
                        { id: 3, label: 'Argentino' },
                        ]}
                        onOptionSelect={selectNacionality.handleOptionSelect}
                        value_id={(value_id)=> register_Data.setEnfermedad(value_id)}
                    />
                    <SelectModal
                        title_select='Contactos'
                        labelSelect={nativeLanguage.selectedOption.label}
                        options={[
                        { id: 1, label: 'Quechua' },
                        { id: 2, label: 'Español' },
                        { id: 3, label: 'Aymara' },
                        { id: 4, label: 'Frances' },
                        ]}
                        onOptionSelect={nativeLanguage.handleOptionSelect}
                        value_id={(value_id)=> register_Data.setContacto(value_id)}
                    />
            </View>

            <View style={{flexDirection:'row'}}>
                <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                    <ButtonComponent nameButton='VOLVER' colorButton={Colors.GREEN}
                    buttonPressed={backButtonPressed} />
                </View>
                <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                    <ButtonComponent nameButton='PUBBLICAR' colorButton={Colors.RED} 
                    buttonPressed={publishButtonPressed} />
                </View>
            </View>
    </View>
  )
}

export default ComplaintScreen2