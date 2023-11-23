import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from '@rneui/themed';

const CarouselImages = ({images, height, width, select_photo}) => {
    
  return (
    <View style={{flex: 1}}>

        <FlatList 
            data={images}
            // keyExtractor={(_, index)=> index.toString}
            horizontal
            pagingEnabled
            renderItem={({item})=>{

                console.log('====>>> ', item);
                return (
                    <View style={{justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOpacity: 1, shadowOffset: {
                        width: 0,
                        height: 0
                    },
                    shadowRadius: 20
                    }}>
                        <TouchableOpacity onPress={select_photo}>
                            <Image 
                                source={{uri: item}}
                                style={{ width: width, height: height, resizeMode: 'cover', borderRadius: 16}}
                            />
                        </TouchableOpacity>
                    </View>
                )
            }}
        />
    </View>
    
  )
}

export default CarouselImages