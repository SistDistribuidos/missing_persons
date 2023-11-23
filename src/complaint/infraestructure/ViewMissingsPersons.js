import { View, Text, Modal, StyleSheet, TouchableWithoutFeedback, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import CarouselImages from './components/CarouselImages';
import { Divider } from '@rneui/themed';
import Colors from '../domain/Colors';
import HairColor from '../../domain/HairColor';
import EyeColor from '../../domain/EyeColor';
import Genero from '../../domain/Genero';
import Flag from 'react-native-flags';
import MapaWithUbication from './components/MapaWithUbication';
import CarouselImagesGallery from './components/CarouselImagesGallery';
import { Dimensions } from 'react-native';

const ViewMissingsPersons = ({ modal_visible, close_modal, data_complaint }) => {
    
    const { width, height } = Dimensions.get('window');
    const [viewGallery, setViewGallery] = useState(false)

    const selected_color_hair = (color) =>{
        if(color == 'Amarillo'){
            return HairColor.Amarillo;
        }else if(color == 'Morado'){
            return HairColor.Morado;
        }else if(color == 'Cafe'){
            return HairColor.Cafe;
        }else if(color == 'Gris'){
            return HairColor.Gris;
        }else if(color == 'Azul'){
            return HairColor.Azul;
        }else if(color == 'Verde'){
            return HairColor.Verde;
        }else if(color == 'Rojo'){
            return HairColor.Rojo;
        }else if(color == 'Blanco'){
            return HairColor.Blanco;
        }else if(color == 'Negro'){
            return HairColor.Negro;
        }else if(color == 'Naranja'){
            return HairColor.Naranja;
        }else if(color == 'Rosado'){
            return HairColor.Rosado;
        }else{
            return HairColor.Negro;
        }
    }

    const selected_color_eye = (color) =>{
        if(color == 'Cafe'){
            return EyeColor.Cafe;
        }else if(color == 'Morado'){
            return EyeColor.Morado;
        }else if(color == 'Gris'){
            return EyeColor.Gris;
        }else if(color == 'Rosado'){
            return EyeColor.Rosado;
        }else if(color == 'Negro'){
            return EyeColor.Negro;
        }else if(color == 'Azul'){
            return EyeColor.Azul;
        }else if(color == 'Verde'){
            return EyeColor.Verde;
        }else{
            return EyeColor.Negro;
        }
    }
    const selected_color_genero = (genero) =>{
        if(genero == '1'){
            return Genero.MASCULINO;
        }else if(genero == '2'){
            return Genero.FEMENINO;
        }else{
            return Genero.OTRO;
        }
    }
    
    if(viewGallery){
        return (
            <Modal
                transparent={false}
                visible={modal_visible}
                animationType="slide"
                onRequestClose={()=>setViewGallery(false)}
            >
                <View style={styles.modalContainer}>
                    <CarouselImagesGallery images={[data_complaint.imagen1, data_complaint.imagen1]} height={height} width={width} />
                </View>
            </Modal>
        )
    }

    return (
        <Modal
            transparent={false}
            visible={modal_visible}
            animationType="slide"
            onRequestClose={close_modal}
        >
            <TouchableWithoutFeedback onPress={close_modal}>
                <ScrollView>


                    <View style={styles.modalContainer}>
                        <View style={{ backgroundColor: 'white', flex: 1, margin: 20, borderRadius: 12 }}>
                            <View style={{ flex: 1, margin: 10}}>
                                <View style={{ flex: 5 }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{data_complaint.nombre} {data_complaint.apellido}</Text>
                                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                                        <Flag code={data_complaint.nacionalidad_code} size={32} />
                                        <Text style={{ fontSize: 15, fontWeight: '400', marginLeft: 8 }}>{data_complaint.nacionalidad_id}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 5, marginVertical: 5}}>

                                    <CarouselImages 
                                        images={[data_complaint.imagen1, data_complaint.imagen1]}
                                        height={200}
                                        width={300}
                                        select_photo={()=>setViewGallery(true)}
                                    />
                                </View>
                                <View style={{ flex: 5}}>
                                    <View style={{flex:1, flexDirection: 'row', marginVertical:15}}>
                                        <View style={{flex:1, alignContent: 'center', justifyContent: 'center'}}>
                                            <Text style={{textAlign: 'center', fontWeight:'bold', fontSize: 15}}>Color Cabello</Text>
                                            <Image
                                                source={selected_color_hair(data_complaint.color_cabello)}
                                                style={{ width: '100%', height: 40 }}
                                                resizeMode="contain"
                                                />
                                        </View>
                                        <View style={{flex:1, alignContent: 'center', justifyContent: 'center'}}>
                                            <Text style={{textAlign: 'center', fontWeight:'bold', fontSize: 15}}>Genero</Text>
                                            <Image
                                                source={selected_color_genero(data_complaint.genero)}
                                                style={{ width: '100%', height: 50 }}
                                                resizeMode="contain"
                                                />
                                        </View>
                                        <View style={{flex:1, alignContent: 'center', justifyContent: 'center'}}>
                                            <Text style={{textAlign: 'center', fontWeight:'bold', fontSize: 15}}>Color Ojos</Text>
                                            <Image
                                                source={selected_color_eye(data_complaint.color_ojos)}
                                                style={{ width: '100%', height: 40 }}
                                                resizeMode="contain"
                                            />
                                        </View>
                                    </View>
                                    <Divider width={2} />
                                    <View style={{flex:1, flexDirection: 'row', marginVertical:15}}>
                                        <View style={{flex:1, alignContent: 'center', justifyContent: 'center'}}>
                                            <Text style={{textAlign: 'center', fontWeight:'bold', fontSize: 15}}>Peso</Text>
                                            <Text style={{textAlign: 'center', fontWeight:'300', fontSize: 15}}>{data_complaint.peso} KG</Text>
                                            <Divider width={2} style={{marginHorizontal: 15}}/>
                                        </View>
                                        <View style={{flex:1, alignContent: 'center', justifyContent: 'center'}}>
                                            <Text style={{textAlign: 'center', fontWeight:'bold', fontSize: 15}}>Altura</Text>
                                            <Text style={{textAlign: 'center', fontWeight:'300', fontSize: 15}}>{data_complaint.altura} mts</Text>
                                            <Divider width={2} style={{marginHorizontal: 15}}/>
                                        </View>
                                        <View style={{flex:1, alignContent: 'center', justifyContent: 'center'}}>
                                            <Text style={{textAlign: 'center', fontWeight:'bold', fontSize: 15}}>Edad</Text>
                                            <Text style={{textAlign: 'center', fontWeight:'300', fontSize: 15}}>{data_complaint.edad} años</Text>
                                            <Divider width={2} style={{marginHorizontal: 15}}/>
                                        </View>
                                    </View>

                                    <View style={{margin:8}}>
                                        <Text style={{fontWeight:'bold', fontSize: 15}}>Donde se dirigía: </Text>
                                        <Text style={{fontWeight:'400', fontSize: 14, marginLeft: 10}}>{data_complaint.direccion}</Text>
                                    </View>
                                    <View style={{margin:8}}>
                                        <Text style={{fontWeight:'bold', fontSize: 15}}>Fecha y Hora de desaparición: </Text>
                                        <Text style={{fontWeight:'400', fontSize: 14, marginLeft: 10}}>{data_complaint.fecha_desaparicion}, en horas {data_complaint.hora_desaparicion}</Text>
                                    </View>
                                    <View style={{margin:8}}>
                                        <Text style={{fontWeight:'bold', fontSize: 15}}>Ultima ropa que traia puesta: </Text>
                                        <Text style={{fontWeight:'400', fontSize: 14, marginLeft: 10}}>{data_complaint.ultima_ropa_puesta}</Text>
                                    </View>
                                    <View style={{margin:8}}>
                                        <Text style={{fontWeight:'bold', fontSize: 15}}>Cicatrices: </Text>
                                        <Text style={{fontWeight:'400', fontSize: 14, marginLeft: 10}}>{data_complaint.cicatriz}</Text>
                                    </View>
                                    <View style={{margin:8}}>
                                        <Text style={{fontWeight:'bold', fontSize: 15}}>Tatuajes: </Text>
                                        <Text style={{fontWeight:'400', fontSize: 14, marginLeft: 10}}>{data_complaint.tatuaje}</Text>
                                    </View>
                                    <View style={{margin:8}}>
                                        <Text style={{fontWeight:'bold', fontSize: 15}}>Enfermedades: </Text>
                                        <Text style={{fontWeight:'400', fontSize: 14, marginLeft: 10}}>{data_complaint.enfermedades}</Text>
                                    </View>

                                    
                                    <View style={{margin:8}}>
                                        <Text style={{fontWeight:'bold', fontSize: 15}}>Ubicación donde desapareció: </Text>
                                        <MapaWithUbication 
                                            latitude={data_complaint.latitude}
                                            longitude= {data_complaint.longitude}
                                        />
                                    </View>

                                    <View style={{margin:8}}>
                                        <Text style={{fontWeight:'bold', fontSize: 20, color: Colors.RED, textAlign: 'center'}}>¿ Me viste ? llama al </Text>
                                        <Text style={{fontWeight:'400', fontSize: 20, marginLeft: 10, color: Colors.RED, textAlign: 'center'}}>{data_complaint.contacto}</Text>
                                    </View>
                                </View>
                            </View>


                        </View>

                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        //   justifyContent: 'center',
        //   alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
});

export default ViewMissingsPersons