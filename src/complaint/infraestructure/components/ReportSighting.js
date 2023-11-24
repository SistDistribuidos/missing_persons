import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, StyleSheet, ImageBackground, TextInput, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { Image } from '@rneui/themed';
import helper from '../../../domain/helper';
import { StatusBar } from 'expo-status-bar';
import UploadPhoto from '../UploadPhoto';
import { Button } from 'react-native';
import { ScrollView } from 'react-native';
import RegisterUbication from '../RegisterUbication';
import Colors from '../../domain/Colors';
import DateTimeComponent from './DateTimeComponent';
import InputNumber from '../InputNumber';
import { sendAvistament } from '../../../application/services/ValuesService';
import { useNavigation } from '@react-navigation/native';

const ReportSighting = ({ images, height, width, visible, notVisible, complaint_id }) => {
    
    const navigation = useNavigation();
    const [denunciaImage, setDenunciaImage] = useState(null);
    const [fotoImage, setFotoImage] = useState(null);
    const [ubication, setUbication] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [contacto, setContacto] = useState('');

    const setImages = (image, type) => {
        if (type == 'denuncia') {
            setDenunciaImage(image);
        }
        else {
            setFotoImage(image);
            console.log(image)
        }
    };
    const saveReportSighting = () => {
        let denuncia_id = complaint_id;
        const data = {denuncia_id, denunciaImage, fotoImage, ubication, descripcion, fecha, hora, contacto};
        if (!(denuncia_id && ubication && descripcion && fecha && hora && contacto)){
            ToastAndroid.show('Llene los campos primero', ToastAndroid.SHORT);
            return;
        }
        console.log(data)
        sendAvistament(data).then((response) => {
            if (!response) {
                ToastAndroid.show('Hubo un problema con el reporte, intente mas tarde', ToastAndroid.SHORT);
            } else {
                navigation.navigate('Complaints');
            }
        }).catch((error) => {
            console.log('Ocurrio un error durante el envio de formulario', error )
        });
    }
    return (

        <ScrollView >
            <View style={{ backgroundColor: 'white', flex: 1, margin: 20, borderRadius: 12 }}>
                <View style={{ flex: 1, marginHorizontal: 2, marginVertical: 20 }}>
                    <UploadPhoto setImages={setImages} />
                </View>
                <View style={{ flex: 1, marginVertical: 20 }}>
                    <View style={{ paddingHorizontal: 16 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', }}>Describa detalladamente como vió a la persona</Text>
                        <TextInput
                            style={{
                                height: '70%', // Ajusta la altura según tus necesidades
                                borderColor: 'gray',
                                borderRadius: 10,
                                borderWidth: 1,
                                fontSize: 18, // Ajusta el tamaño del texto según tus necesidades
                                padding: 8,
                            }}
                            multiline={true}
                            numberOfLines={3} // Puedes ajustar el número de líneas según tus necesidades
                            // value={inputValue}
                            onChangeText={(text) => setDescripcion(text)}
                        />

                        {/* Otros elementos o botones según tus necesidades */}
                        {/* <Button title="Enviar" onPress={() => console.log(inputValue)} /> */}
                    </View>
                </View>
                
                <Text style={{marginHorizontal: 20, fontSize: 15, fontWeight: 'bold', textAlign:'center'}}>Hora y fecha del avistamiento</Text>
                <View style={{flex: 2 }}>
                    <DateTimeComponent separeAtribbute={true} onDateChange={(date, hour) => { setFecha(date), setHora(hour) }} />
                </View>

                <InputNumber title={'Numero de celular'} placeHolder={'700000XX'} errorMessage='' inputChangeValue={(value)=> setContacto(value)}/>
                <View style={{ flex: 1, marginVertical: 20, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <RegisterUbication ubication_selected={(val) => {setUbication(val), console.log('ingresa', val);}} exist_ubication={ubication != '' ? true : false} />
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, padding: 10 }}>
                    <TouchableOpacity style={{ backgroundColor: Colors.RED, padding: 10, borderRadius: 15, elevation: 55, paddingHorizontal: 55 }} onPress={saveReportSighting}>
                        <Text style={{ color: Colors.WHITE, fontSize: 22, fontWeight: 'bold' }}>Reportar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
export default ReportSighting