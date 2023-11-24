import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FacialScannerHome from './FacialScannerHome'
import { Icon } from '@rneui/themed'
import { Image } from 'react-native';
import Colors from '../../complaint/domain/Colors'
import { searchPeople } from '../../application/services/ValuesService'
import * as Animatable from 'react-native-animatable';

const HomeFacialScanner = () => {
    const [useCamera, setUseCamera] = useState(false)
    const [photo, setPhoto] = useState(null)
    const [reportado, setReportado] = useState(false)


    const recivePhoto = (photographie) => {
        setPhoto(photographie);
        setUseCamera(false);
        console.log('la foto', photo);
    }
    const escanearFoto = () => {
        setReportado(true);

        searchPeople(photo).then((res) => {
            console.log('Todo Ok');
            setReportado(true);
        }).catch((error) => {
            console.log(error)
        });
    }
    if (useCamera) {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <FacialScannerHome send_photo={(val) => recivePhoto(val)}></FacialScannerHome>
                {/* <TouchableOpacity onPress={()=>setUseCamera(false)}>
                <Text>hola</Text>
            </TouchableOpacity> */}
            </SafeAreaView>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <TouchableOpacity onPress={() => setUseCamera(true)}>
                <Text>hola</Text>
            </TouchableOpacity> */}

            {photo == null ?
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>Tomar fotografía</Text>
                    <Icon
                        raised
                        name='camera'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => { console.log('entra a sacar foto'), setUseCamera(true) }}
                        size={80}
                    />
                </View>
                :
                <View style={{ flex: 1 }} >
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginBottom: 15 }}>Fotografia tomada</Text>
                    </View>
                    <View style={{ flex: 5 }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        source={{ uri: photo }}
                                        style={styles.image_styles}
                                    />
                                    <Icon
                                        name="delete"
                                        type="tipo-de-icono"
                                        size={35} // Tamaño del icono
                                        color={Colors.GREEN}
                                        containerStyle={{ position: 'absolute', bottom: 30, right: 10 }}
                                        onPress={() => {setPhoto(null), setReportado(false)}}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* <View style={{flex:0.5}}>
                        <TouchableOpacity style={{justifyContent: 'center', alignContent:'center', alignItems:'center', backgroundColor:Colors.RED, marginHorizontal: 80}}>
                            <Text>Escanear fotos</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
            }
            <View style={{ flex: 2 }}>
                <View style={{ flex: 0.1, backgroundColor: 'white' }}>
                    <TouchableOpacity style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: Colors.RED, marginHorizontal: 80, padding: 10, borderRadius: 22 }} onPress={escanearFoto}>
                        <Text style={{ color: Colors.WHITE, fontSize: 18, fontWeight: 'bold' }}>Escanear fotos</Text>
                    </TouchableOpacity>
                </View>

                {reportado==true ?
                    <Animatable.View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }} 
                    animation={'bounceInUp'} duration={1500} >
                        <Text style={{ color: Colors.RED, textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}> Alerta Persona reportada como desaparecida !!!</Text>
                        <Image
                            source={{ uri: "https://res.cloudinary.com/de9nzcfsz/image/upload/v1700797533/uh8xxzozpk82ziiw3wvj.png" }}
                            style={styles.image_styles}
                        />
                    </Animatable.View>
                    :
                    <Text></Text>
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image_styles: {
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
});
export default HomeFacialScanner