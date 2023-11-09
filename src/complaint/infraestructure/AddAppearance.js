import { View, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import InputText from './InputText'
import SelectModal from './ModalSelect'
import ButtonNext from './components/ButtonNext'
import ModalSelectColour from './components/ModalSelectColour'
import Colors from '../domain/Colors'
import useSelected from '../application/UseSelected'

const AddAppearance = ({register_Data, button_next}) => {


    const hair_colour = useSelected();
    const eye_color = useSelected();
    const tattoo_description = useSelected();
    const height = useSelected();
    const weight = useSelected();

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.card}>
                <View style={{ flex: 10 }}>
                    <ScrollView>
                        <ModalSelectColour
                            title_select='Color de cabello'
                            labelSelect={hair_colour.selectedOption.label}
                            onOptionSelect={hair_colour.handleOptionSelect}
                            value_id={(value_id) => register_Data.setFechas_nacimiento(value_id)}
                        />
                        <View style={{ flexDirection: 'row' }}>
                            <SelectModal
                                title_select='Altura'
                                labelSelect={height.selectedOption.label}
                                options={[
                                    { id: 1, label: 'Boliviano' },
                                    { id: 2, label: 'Español' },
                                    { id: 3, label: 'Argentino' },
                                ]}
                                onOptionSelect={height.handleOptionSelect}
                                value_id={(value_id) => register_Data.setGenero(value_id)}
                            />
                            <SelectModal
                                title_select='Peso'
                                labelSelect={weight.selectedOption.label}
                                options={[
                                    { id: 1, label: 'Quechua' },
                                    { id: 2, label: 'Español' },
                                    { id: 3, label: 'Aymara' },
                                    { id: 4, label: 'Frances' },
                                ]}
                                onOptionSelect={weight.handleOptionSelect}
                                value_id={(value_id) => register_Data.setFechas_nacimiento(value_id)}
                            />
                        </View>
                        <SelectModal
                            title_select='Color de Ojos'
                            labelSelect={eye_color.selectedOption.label}
                            options={[
                                { id: 1, label: 'Quechua' },
                                { id: 2, label: 'Español' },
                                { id: 3, label: 'Aymara' },
                                { id: 4, label: 'Frances' },
                            ]}
                            onOptionSelect={eye_color.handleOptionSelect}
                            value_id={(value_id) => register_Data.setFechas_nacimiento(value_id)}
                        />
                        <SelectModal
                            title_select='Descripcion de cicatrices'
                            labelSelect={eye_color.selectedOption.label}
                            options={[
                                { id: 1, label: 'Quechua' },
                                { id: 2, label: 'Español' },
                                { id: 3, label: 'Aymara' },
                                { id: 4, label: 'Frances' },
                            ]}
                            onOptionSelect={eye_color.handleOptionSelect}
                            value_id={(value_id) => register_Data.setFechas_nacimiento(value_id)}
                        />
                        <SelectModal
                            title_select='Descripcion de tatuajes'
                            labelSelect={tattoo_description.selectedOption.label}
                            options={[
                                { id: 1, label: 'Quechua' },
                                { id: 2, label: 'Español' },
                                { id: 3, label: 'Aymara' },
                                { id: 4, label: 'Frances' },
                            ]}
                            onOptionSelect={tattoo_description.handleOptionSelect}
                            value_id={(value_id) => register_Data.setFechas_nacimiento(value_id)}
                        />

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