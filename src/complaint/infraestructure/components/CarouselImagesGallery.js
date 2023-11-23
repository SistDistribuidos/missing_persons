import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { Image } from '@rneui/themed';
import helper from '../../../domain/helper';
import { StatusBar } from 'expo-status-bar';

const CarouselImagesGallery = ({ images, height, width, visible, notVisible }) => {

    return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden/>
                {/* <View style={StyleSheet.absoluteFillObject}>
                    <Image
                        source={{uri: helper.IMAGE_RANDOM}}
                        style={[StyleSheet.absoluteFillObject]}
                        onError={(error) => console.error('Error de carga de imagen de fondo:', error)}
                    />
                </View> */}
                <ImageBackground
                source={{ uri: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2020/09/hipertextual-color-apocalipsis-verde-tornados-que-se-deben-colores-cielo-2020821565.jpg?resize=1500%2C1000&quality=50&strip=all&ssl=1" }}
                style={styles.backgroundImage}
                blurRadius={10}
            >
                <FlatList
                    data={images}
                    // keyExtractor={(_, index)=> index.toString}
                    horizontal
                    pagingEnabled
                    renderItem={({ item }) => {
                        console.log('esta renderizando gallery ', item);
                        return (
                            <View style={{ width, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOpacity: 1, shadowOffset: {
                                    width: 0,
                                    height: 0
                                },
                                shadowRadius: 20
                            }}>
                                    <Image
                                        source={{ uri: item }}
                                        style={{ width:width*0.8, height: height*0.64, resizeMode: 'cover', borderRadius: 16 }}
                                    />
                            </View>
                        )
                    }}
                />
                </ImageBackground>
            </View>
            
        // </Modal>
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
export default CarouselImagesGallery