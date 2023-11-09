import { View, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import InputText from './InputText'
import SelectModal from './ModalSelect'
import ButtonNext from './components/ButtonNext'
import ModalSelectColour from './components/ModalSelectColour'
import Colors from '../domain/Colors'
import useSelected from '../application/UseSelected'

const AddDisappearanceData = ({register_Data, button_next}) => {

    const data_and_time = useSelected();
    const diseases = useSelected();
    const contacts = useSelected();
    
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.card}>
                <View style={{ flex: 10 }}>
                    <ScrollView>
                        <InputText title={'Donde se dirigia'} placeHolder={'Joel Matias'} errorMessage='' inputChangeValue={(value)=>register_Data.setDireccion(value)} />

                        <SelectModal
                                title_select='Fecha y hora'
                                labelSelect={data_and_time.selectedOption.label}
                                options={[
                                    { id: 1, label: 'Boliviano' },
                                    { id: 2, label: 'Español' },
                                    { id: 3, label: 'Argentino' },
                                ]}
                                onOptionSelect={data_and_time.handleOptionSelect}
                                value_id={(value_id) => register_Data.setGenero(value_id)}
                        />
                           
                        <InputText title={'Ultima ropa que traia puesta'} placeHolder={'Fernandez de las casas'} errorMessage='' inputChangeValue={(value)=>register_Data.setUltima_ropa_puesta(value)}/>

                        <SelectModal
                        title_select='Enfermedades'
                        labelSelect={diseases.selectedOption.label}
                        options={[
                        { id: 1, label: 'Boliviano' },
                        { id: 2, label: 'Español' },
                        { id: 3, label: 'Argentino' },
                        ]}
                        onOptionSelect={diseases.handleOptionSelect}
                        value_id={(value_id)=> register_Data.setEnfermedad(value_id)}
                        />
                        <SelectModal
                            title_select='Contactos'
                            labelSelect={contacts.selectedOption.label}
                            options={[
                            { id: 1, label: 'Quechua' },
                            { id: 2, label: 'Español' },
                            { id: 3, label: 'Aymara' },
                            { id: 4, label: 'Frances' },
                            ]}
                            onOptionSelect={contacts.handleOptionSelect}
                            value_id={(value_id)=> register_Data.setContacto(value_id)}
                        />

                    </ScrollView>
                </View>
                <View style={{ marginBottom: -15 }}>
                    <ButtonNext title="Siguiente" clickButtonNext={()=> button_next(4)} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1, backgroundColor: Colors.FONDO, margin: 20, borderRadius: 20,
        //   backgroundColor: 'rgb(0, 160, 0)',
        //   borderTopRightRadius: 25,
        //   borderBottomRightRadius: 25,
        paddingTop: 15,
        // Propiedades de sombra
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 10, // Solo para Android
    },
});
export default AddDisappearanceData