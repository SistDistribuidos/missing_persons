import { View, Text, Button, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Icon } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';
import ImageGalleryShow from './ImageGalleryShow';

const FilesScreen = () => {
    
  const [image, setImage] = useState(null);
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
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{flex: 10, backgroundColor: 'white', marginTop:20}}>
        <View style={{flexDirection: 'row'}}>
            <Icon
                raised
                name='camera'
                type='font-awesome'
                color='#f50'
                onPress={() => {console.log('hello'), pickImage()}} 
                size={80}
                />
                <Icon
                raised
                name='map-marker'
                type='font-awesome'
                color='#f50'
                onPress={() => console.log('hello')} 
                size={80}
                />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {image && 
                (<View style={{width: 200,
                  height: 200,
                  borderRadius: 10, // Agrega un borde redondeado
                  backgroundColor: 'white',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3, // Cambia la opacidad de la sombra según tus preferencias
                  shadowRadius: 4,
                  elevation: 5, // Sombra en dispositivos Android
                  overflow: 'hidden'}}>
                    <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                    </View>
                )
            }
        </View>
        <ImageGalleryShow image={{image}}></ImageGalleryShow>
    </View>
  )
}

export default FilesScreen