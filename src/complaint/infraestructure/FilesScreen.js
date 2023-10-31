import { View, Text, Button, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Icon } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';

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
    console.log(image);
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
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            {/* <Button title="Seleccionar Imagen" onPress={pickImage} /> */}
        </View>
    </View>
  )
}

export default FilesScreen