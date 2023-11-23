import { View, Text, FlatList, TouchableHighlight, TouchableOpacity, Image, StyleSheet, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import Colors from '../domain/Colors'
import { useNavigation } from '@react-navigation/native';
import { getHistory } from '../../application/services/ValuesService';

const ViewMissingPersonsRecords = ({complaint_id}) => {
    let data = [
        { id: 1, nombre: 'Juan', apellido: 'perez', key: 'item1', estado: 'Pendiente', descripcion: 'Visto por ultima vez por el 8vo anillo zona de la  guradia viste de una cammisa azul y pantalones jean, cualquier informacion...', imagen1: 'https://picsum.photos/200', imagen2: null  }, 
        { id: 2, nombre: 'fulanito', apellido: 'de tal', key: 'item2', estado: 'Aceptado', descripcion: 'Visto por ultima vez por el 8vo anillo zona de la  guradia viste de una cammisa azul y pantalones jean, cualquier informacion...', imagen1: 'https://picsum.photos/200', imagen2: 'https://picsum.photos/200' }, 
        { id: 3, nombre: 'pepe', apellido: 'de las casas', key: 'item3', estado: 'Rechazado', descripcion: 'Visto por ultima vez por el 8vo anillo zona de la  guradia viste de una cammisa azul y pantalones jean, cualquier informacion...', imagen1: 'https://picsum.photos/200', imagen2: 'https://picsum.photos/200' }
    ];
    const screen_complaint = (item_id) =>{
        complaint_id(item_id);
    }

    const [dataList, setDataList] = useState([]);
    useEffect(() => {
        getHistory().then((response) => {
            setDataList(response);
        }).catch((e)=> {
            console.log(e);
        })
    },[]);

    const chargeHistory = async (time) => {
        try {
            const res = await getHistory();
            setDataList(res);
        } catch(error) {
            if (error instanceof Error && error.message.includes('timeout') && time < 3 ) {
                setTimeout(() => {
                    chargeHistory();
                }, 5000);
            } else {
                ToastAndroid.show('Intentelo mas tarde', ToastAndroid.SHORT);
            }
        }
        
    }

    const navigation = useNavigation();
    const renderItem = ({ item }) => {
        
        const select_color_estado = (estado) =>{
            if(estado === 'Pendiente' ){
                return Colors.ORANGE;
            }else if(estado === 'Rechazado'){
                return Colors.RED;
            }else{
                return Colors.GREEN;
            }
        }
        return (
            <View style={[styles.container, {padding: 10}]}>
                <TouchableHighlight
                    key={item.key}
                    onPress={() => {screen_complaint(item.id)}}

                    underlayColor={Colors.RED}
                >
                    <View style={{ backgroundColor: 'white', width: '100%', height: 280, borderRadius: 10 }}>
                        <View style={{ flex: 1, paddingTop: 5 }}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 3 }}>
                                <View style={{ flex: 2 }}>
                                    <Text style={{ fontSize: 25, marginLeft: 10, fontWeight: 'bold' }}>{item.nombre} {item.apellido}</Text>
                                </View>

                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => console.log('estado')}
                                        style={{ backgroundColor: 'white', borderRadius: 15, borderWidth: 3, borderColor:select_color_estado(item.estado), padding: 5 }}
                                    >
                                        <Text style={{ color:select_color_estado(item.estado), fontWeight: 'bold' }}>{item.estado}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex:2}}>
                                <Text style={{ fontSize: 15, marginLeft: 10, fontWeight: '500' }}>{item.descripcion}</Text>
                            </View>
                            <View style={{ flex: 5, paddingBottom: 8}}>
                                
                                { item.imagen1 !== null && item.imagen2 !== null ?
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection:'row' }}>
                                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin:5}}>
                                            <Image
                                                source={{uri: item.imagen1 }}
                                                style={styles.image_styles} 
                                            />
                                        </View>
                                        <View style={{flex: 1, marginRight:5, justifyContent: 'center', alignItems: 'center'}}>
                                            <Image
                                                source={{uri: item.imagen2 }}
                                                style={styles.image_styles} 
                                            />
                                        </View>
                                    </View>
                                    :
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image
                                            source={{uri: 'https://picsum.photos/200' }}
                                            style={styles.image_styles} 
                                        />
                                    </View> 
                                }
                               
                                {/* <TouchableOpacity style={{ margin: 10, backgroundColor: 'red' }} onPress={() => console.log('good')}>
                                    <Text>Press Here</Text>
                                </TouchableOpacity> */}

                            </View>

                        </View>
                    </View>

                </TouchableHighlight>
            </View>
        );
    };

    return (
        <View style={{ flex: 1}}
        >
            <FlatList
                ItemSeparatorComponent={
                    Platform.OS !== 'android' &&
                    (({ highlighted }) => (
                        <View
                            style={[style.separator, highlighted && { marginLeft: 0 }]}
                        />
                    ))
                }
                data={dataList}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // Propiedades de sombra
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity:1,
        shadowRadius: 5,
        elevation: 100, // Solo para Android
    },
    image_styles: {
        width: 150, 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 20
    },
});

export default ViewMissingPersonsRecords