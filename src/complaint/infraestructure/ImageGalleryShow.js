import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/base';
import { ImageGallery } from '@georstat/react-native-image-gallery';
import { useState } from 'react';

const ImageGalleryShow = ({image}) => {
  console.log(image);
    const images = [
        {
          id: 1,
          url: image.image,
          // any other extra info you want
        },
    ]
    const [isOpen, setIsOpen] = useState(false);
    const openGallery = () => setIsOpen(true);
    const closeGallery = () =>{
      console.log('inmgreasaaaaaaaaaaaa');
      setIsOpen(false);
      onclose();
    }
  return (
    <View>
        <Button onPress={openGallery} title="Open Gallery" />
        <ImageGallery close={closeGallery} isOpen={isOpen} images={images} />
    </View>
  )
}

export default ImageGalleryShow