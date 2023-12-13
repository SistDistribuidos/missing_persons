import { View, StyleSheet } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import InputText from './InputText'
import SelectModal from './components/ModalSelect'
import ButtonNext from './components/ButtonNext'
import Colors from '../domain/Colors'
import useSelected from '../application/UseSelected'
import DateTimeComponent from './components/DateTimeComponent'
import InputNumber from './InputNumber'

const AddDisappearanceData = ({ register_Data, button_next }) => {

    const data_and_time = useSelected();
    const diseases = useSelected();
    const contacts = useSelected();

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.card}>
                <View style={{ flex: 10 }}>
                    <ScrollView>
                        <InputText title={'Donde se dirigia'} placeHolder={'Se dirigia al lugar ...'} errorMessage='' inputChangeValue={(value) => register_Data.setDireccion(value)} />

                        <DateTimeComponent separeAtribbute={true} onDateChange={(date, hour) => { register_Data.setFecha_desaparicion(date), register_Data.setHora_desaparicion(hour) }} />

                        <InputText title={'Ultima ropa que traia puesta'} placeHolder={'Polera blanca porcelana'} errorMessage='' inputChangeValue={(value) => register_Data.setUltima_ropa_puesta(value)} />
                        <InputText title={'Enfermedades'} placeHolder={'Diabetes tipo 1'} errorMessage='' inputChangeValue={(value) => register_Data.setEnfermedad(value)} />
                        <InputNumber title={'Contacto'} placeHolder={'700000XX'} errorMessage='' inputChangeValue={(value) => register_Data.setContacto(value)} />


                    </ScrollView>
                </View>
                <View style={{ marginBottom: -15 }}>
                    <ButtonNext title="Siguiente" clickButtonNext={() => button_next(4)} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1, backgroundColor: Colors.FONDO,
        margin: 20,
        borderRadius: 20,
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