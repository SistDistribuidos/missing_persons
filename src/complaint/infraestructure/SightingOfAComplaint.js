import { View, Text, StyleSheet, FlatList, RefreshControl, Image, TouchableOpacity, TouchableHighlight, Modal } from 'react-native'
import React, { useState } from 'react'
import Colors from '../domain/Colors'
import * as Animatable from "react-native-animatable";
import { FontAwesome5 } from '@expo/vector-icons';
import { Dialog } from '@rneui/themed';
import LottieView from "lottie-react-native";
import LoadingDialog from '../../domain/img_animated/LoadingDialog';
import CarouselImagesGallery from './components/CarouselImagesGallery';
import ModalNoSightings from '../../Sightings.js/infraestructure/components/ModalNoSightings';
import { Dimensions } from 'react-native';
import ModalRegisterMaps from './ModalRegisterMaps';

const SightingOfAComplaint = () => {

    const { width, height } = Dimensions.get('window');

    const [refreshing, setRefreshing] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [viewGallery, setViewGallery] = useState(false);
    let data = [{
        id: 1,
        descripcion: 'Persona vista en los lotes',
        fecha: '2023-11-15',
        contacto: '77598212',
        hora: '20:33:31',
        fotos: [{
            id: 1,
            foto: 'https://res.cloudinary.com/dirau81x6/image/upload/v1699823807/ezsv7oauynmyciv4lnig.jpg'
        }, {
            id: 2,
            foto: 'https://res.cloudinary.com/dirau81x6/image/upload/v1699823807/ezsv7oauynmyciv4lnig.jpg'
        },
        ]
    }, {
        id: 2,
        descripcion: 'persona vista en los chacos',
        fecha: '2023-11-09',
        hora: '20:53:31',
        contacto: '77598212',
        fotos: []
    }, {
        id: 3,
        descripcion: 'persona vista en los chacos',
        fecha: '2023-11-09',
        hora: '20:53:31',
        contacto: '77598212',
        fotos: []
    }, {
        id: 4,
        descripcion: 'persona vista en los chacos',
        fecha: '2023-11-09',
        hora: '20:53:31',
        contacto: '77598212',
        fotos: []
    }
    ]
    const handleRefresh = () => {
        setRefreshing(true);
        // getclhildrenMovil();
        setRefreshing(false);
    };

    const [visibleModalNoSightings, setVisibleModalNoSightings] = useState(false)
    const [photoCarruselImagesGallery, setPhotoCarruselImagesGallery] = useState([])
    const hasPhoto = (item) => {
        console.log(item, 'ingresaaaaaaa', item.fotos.length);
        if (item.fotos.length == 0) {
            setVisibleModalNoSightings(true);
        } else {
            let photos = []
            item.fotos.forEach(function (elemento) {
                photos.push(elemento.foto)
            });
            setPhotoCarruselImagesGallery(photos);
            setViewGallery(true);
            // console.log('has fotos ', val, val[0].foto);
            // return val[0].foto;
        };
    };
    if (viewGallery) {
        console.log('ingrsa a ver galeria', photoCarruselImagesGallery);
        return (
            <Modal
                transparent={false}
                visible={viewGallery}
                animationType="slide"
                onRequestClose={() => setViewGallery(false)}
            >
                <View style={styles.modalContainer}>
                    <CarouselImagesGallery images={photoCarruselImagesGallery} height={height} width={width} />
                </View>
            </Modal>
        )
    }

    const [ubication, setUbication] = useState(false)
    if (ubication) {
        return (
            <View style={{flex: 1}}>
                <ModalRegisterMaps visible={ubication} onClose={() => setVisibilityUbicationModal(false)}
                    ubication_selected={(val) => get_ubication(val)}
                ></ModalRegisterMaps>
            </View>
        )
    }
    return (
        <View style={styles.init}>
            <View style={styles.container_encabezado}>
                <Animatable.View style={styles.contain_enc_letter} animation="pulse" easing="ease-out" iterationCount="infinite">
                    <Text style={styles.encabezado_letter}>Avistamientos</Text>
                </Animatable.View>
                <View style={styles.contain_enc_icon}>

                    <FontAwesome5 name="bell" size={30} color={Colors.WHITE}
                        onPress={() => console.log('hello')} />
                </View>
            </View>
            <Animatable.View style={styles.contain_form} animation="fadeInUpBig">

                <ModalNoSightings visible={visibleModalNoSightings} onAccept={() => setVisibleModalNoSightings(false)}
                    title={'Avistamiento Sin foto'}

                    description={'Este avistamiento fue registrado sin ninguna fotografia'}
                >
                </ModalNoSightings>

                {/* <LoadingDialog visible={false}></LoadingDialog> */}
                <FlatList
                    data={data}
                    contentContainerStyle={{ padding: 10 }}
                    renderItem={({ item }) =>
                        <Item
                            descripcion={item.descripcion}
                            // profilePhoto={hasPhoto(item.fotos)}
                            hora={item.hora}
                            fecha={item.fecha}
                            id={item.id}
                            contacto={item.contacto}
                            view_photos={() => { console.log('ingresaa ver fotos de avistamientos'), hasPhoto(item) }}
                            view_ubication={() => {console.log('godd'), setUbication(true)}}
                            selectChildren={(value) => { console.log('good', value) }}
                        />}
                    keyExtractor={item => item.id}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
                    }
                />
            </Animatable.View>
        </View>
    )
}
const Item = ({ descripcion, profilePhoto, hora, fecha, id, selectChildren, contacto, view_photos, view_ubication }) => (
    <TouchableHighlight
        onPress={() => selectChildren({ id: id })}
        underlayColor={Colors.RED_DEGRADADO}
    >
        <View style={styles.container_card}>
            <View style={styles.container_card_content}>
                <View style={{ flex: 4 }}>
                    <View style={{}}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>Fecha</Text>
                    </View>
                    <View style={{}}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>Hora</Text>
                    </View>
                    <View style={{}}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>Numero contacto</Text>
                    </View>
                    <View style={{}}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>Descripcion</Text>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: Colors.GREEN, borderRadius: 16, marginHorizontal: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: Colors.GREEN }} onPress={view_photos}>
                        <Text style={{ color: Colors.WHITE, fontWeight: 'bold' }}>Ver Fotos</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 4 }}>
                    <View style={{}}>
                        <Text style={{ fontSize: 16, fontWeight: '400', marginLeft: 10 }}>: {fecha}</Text>
                    </View>
                    <View style={{}}>
                        <Text style={{ fontSize: 16, fontWeight: '400', marginLeft: 10 }}>: {hora}</Text>
                    </View>
                    <View style={{}}>
                        <Text style={{ fontSize: 16, fontWeight: '400', marginLeft: 10 }}>: {contacto}</Text>
                    </View>
                    <View style={{}}>
                        <Text style={{ fontSize: 16, fontWeight: '400', marginLeft: 10 }}>: {descripcion}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: Colors.RED, borderRadius: 16, marginHorizontal: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: 'red' }} onPress={view_ubication}>
                        <Text style={{ color: Colors.WHITE, fontWeight: 'bold' }}>Ver Ubicacion</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    </TouchableHighlight>
);
const styles = StyleSheet.create({
    init: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: Colors.RED,
    },
    container_encabezado: {
        flex: 1,
        flexDirection: 'row',
    },
    contain_enc_letter: {
        flex: 2.5,
        // backgroundColor: Colors.BLACK,
        // alignItems: 'center',
        justifyContent: 'center'
    },
    encabezado_letter: {
        color: Colors.WHITE,
        padding: 15,
        fontWeight: 'bold',
        fontSize: 30,
    },
    contain_form: {
        flex: 10,
        // alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.FONDO,
        borderTopEndRadius: 60
    },
    contain_enc_icon: {
        flex: 1,
        // backgroundColor: Colors.BLUE1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_card_content: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: Colors.BLUE1,
        borderRadius: 30,
        // margin:10,
        // padding:10,
    },
    container_card: {
        flex: 1,
        height: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.WHITE,
        borderRadius: 30,
        margin: 10,
        padding: 5,
        // padding:10,
        elevation: 5, // Nivel de elevación para el sombreado
        shadowColor: 'rgba(0, 0, 0, 0.5)', // Color de sombra
        shadowOffset: { width: 0, height: 2 }, // Desplazamiento de la sombra (eje x, eje y)
        shadowOpacity: 0.8, // Opacidad de la sombra
        shadowRadius: 4, // Radio de la sombra
    },
    container_card_image: {
        flex: 0.8,
        width: '100%', height: '100%',
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: Colors.BLUE,
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        // margin:10,
        // padding:10,
    },
    container_card_encabezado_title: {
        flex: 1,
        fontSize: 30,
        fontWeight: '600',
        marginLeft: 10,
        color: Colors.BLACK
    },
    container_card_encabezado_form: {
        flex: 1,
        fontSize: 20,
        marginLeft: 10,
    },
    container_card_footer: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: Colors.BLACK,
        borderRadius: 30,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});
export default SightingOfAComplaint