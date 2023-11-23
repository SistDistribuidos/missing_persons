import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Icon } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native';
import Colors from '../domain/Colors';

const UploadPhoto = ({setImages}) => {


    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Se necesita permiso para acceder a la galería de imágenes.');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
           
            quality: 1,
        });

        if (!result.canceled) {
            if(image==null){
                setImage(result.assets[0].uri);
                setImages(result.assets[0].uri, 'denuncia');
            }else{
                setImage2(result.assets[0].uri);
                setImages(result.assets[0].uri, 'foto');
            }
        }
    };

    return (
        <View style={{ flex: 1 }}>
            {image == null && image2 == null?
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Subir Fotos de Referencia</Text>
                    <Icon
                        raised
                        name='camera'
                        type='font-awesome'
                        color='#f50'
                        onPress={() => { console.log('hello'), pickImage() }}
                        size={80}
                    />
                </View>
                :
                <View style={{ flex: 1 }} >
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginBottom: 15 }}>Subir Fotos de Referencia</Text>
                    </View>
                    <View style={{ flex: 5 }}>
                        <View style={{ flexDirection: 'row', flex:1 }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems:'center' 
                            }}>
                                {image == null?
                                    <Icon
                                        raised
                                        name='camera'
                                        type='font-awesome'
                                        color='#f50'
                                        onPress={() => { console.log('hello'), pickImage() }}
                                        size={65}
                                    />
                                :
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image
                                        source={{uri: image }}
                                        style={styles.image_styles} 
                                        />
                                        <Icon
                                        name="delete"
                                        type="tipo-de-icono"
                                        size={35} // Tamaño del icono
                                        color={Colors.GREEN}
                                        containerStyle={{ position: 'absolute', bottom: 30, right: 10 }}
                                        onPress={()=> setImage(null)}
                                        />
                                    </View>
                                }
                            </View>


                            <View style={{
                                    flex: 1, justifyContent: 'center', alignItems:'center' 
                            }}>
                                {image2 == null?
                                    <Icon
                                        raised
                                        name='camera'
                                        type='font-awesome'
                                        color='#f50'
                                        onPress={() => { console.log('hello'), pickImage() }}
                                        size={65}
                                    />
                                :
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image
                                        source={{uri: image2 }}
                                        style={styles.image_styles} 
                                        />
                                        <Icon
                                        name="delete"
                                        type="tipo-de-icono"
                                        size={35} // Tamaño del icono
                                        color={Colors.GREEN}
                                        containerStyle={{ position: 'absolute', bottom: 30, right: 10 }}
                                        onPress={()=> setImage2(null)}
                                        />
                                    </View>
                                }
                            </View>
                        </View>
                    </View>
                </View>
            }
        </View>
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
export default UploadPhoto