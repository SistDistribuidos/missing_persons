import { View, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import InputText from './InputText'
import SelectModal from './components/ModalSelect'
import ButtonNext from './components/ButtonNext'
import Colors from '../domain/Colors'
import useSelected from '../application/UseSelected'
import InputNumber from './InputNumber'
import  { getColors } from './../../application/services/ValuesService'
import { useState, useEffect } from 'react'
import ModalHairColour from './components/ModalHairColour'
import ModalEyeColour from './components/ModalEyeColour'

const AddAppearance = ({register_Data, button_next}) => {


    const hair_colour = useSelected();
    const eye_color = useSelected();
    const tattoo_description = useSelected();
    const height = useSelected();
    const weight = useSelected();

    const [options_colors, set_options_colors] = useState([]);

    useEffect(() => {
        chargueColors();
    },[]);

    const chargueColors = async () => {
        try {
          const listOfColors = await getColors();
          set_options_colors([...listOfColors]);
        } catch(e) {
          console.log(e)
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.card}>
                <View style={{ flex: 10 }}>
                    <ScrollView>
                        <ModalHairColour
                            title_select='Color de cabello'
                            labelSelect={hair_colour.selectedOption.label}
                            onOptionSelect={hair_colour.handleOptionSelect}
                            value_id={(value_id) => register_Data.setColor_cabello(value_id)}
                            options={ options_colors}
                        />
                        <View style={{ flexDirection: 'row', gap: 50 }}>
                          <InputNumber style={{width: 90}} title={'Altura'} placeHolder={'0.00'} errorMessage='' inputChangeValue={(value)=>register_Data.setAltura(value)} />
                          <InputNumber style={{width: 90}} title={'Peso'} placeHolder={'0.00'} errorMessage='' inputChangeValue={(value)=>register_Data.setPeso(value)} />
                        </View>
                        <ModalEyeColour
                            title_select='Color de Ojos'
                            labelSelect={eye_color.selectedOption.label}
                            options={options_colors}
                            onOptionSelect={eye_color.handleOptionSelect}
                            value_id={(value_id) => register_Data. setColor_ojos(value_id)}
                        />
                        <InputText title={'Descripcion de las cicatrices'} placeHolder={'Ej. Cicatriz en la parte der...'} errorMessage='' inputChangeValue={(value)=>register_Data.setCicatriz(value)} />
                        <InputText title={'Descripcion de tatuajes'} placeHolder={'Ej. tatuaje en forma de ...'} errorMessage='' inputChangeValue={(value)=>register_Data.setTatuaje(value)} />

                    </ScrollView>
                </View>
                <View style={{ marginBottom: -15 }}>
                    <ButtonNext clickButtonNext={()=> button_next(3)} title="Siguiente"/>
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
export default AddAppearance