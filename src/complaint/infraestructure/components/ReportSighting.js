import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, StyleSheet, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Image } from '@rneui/themed';
import helper from '../../../domain/helper';
import { StatusBar } from 'expo-status-bar';
import UploadPhoto from '../UploadPhoto';
import { Button } from 'react-native';
import { ScrollView } from 'react-native';
import RegisterUbication from '../RegisterUbication';
import Colors from '../../domain/Colors';

const ReportSighting = ({ images, height, width, visible, notVisible }) => {

    const [denunciaImage, setDenunciaImage] = useState(null);
    const [fotoImage, setFotoImage] = useState(null);
    const [ubication, setUbication] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const setImages = (image, type) => {
        if (type == 'denuncia') {
            setDenunciaImage(image);
            // register_Data.setDocumento_id(image);
        }
        else {
            setFotoImage(image);
            // register_Data.setImage(image);
        }
    };
    const saveReportSighting=()=>{
        console.log('ingresaaaa');
        
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
                <View style={{ flex: 1, marginVertical: 20, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <RegisterUbication ubication_selected={(val) => setUbication(val)} exist_ubication={ubication!= ''? true: false} />
                    </View>
                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, padding: 10 }}>
                    <TouchableOpacity style={{ backgroundColor: Colors.RED, padding: 15, borderRadius: 15, elevation: 55 }} onPress={saveReportSighting}>
                        <Text style={{ color: Colors.WHITE, fontSize: 20, fontWeight: 'bold' }}>Reportar avistamiento</Text>
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