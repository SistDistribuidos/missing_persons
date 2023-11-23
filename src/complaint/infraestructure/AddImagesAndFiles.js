import { View, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import ButtonNext from './components/ButtonNext'
import Colors from '../domain/Colors'
import UploadPhoto from './UploadPhoto'
import RegisterUbication from './RegisterUbication'

const AddImagesAndFiles = ({register_Data, button_next}) => {

    const [ubication, setUbication] = useState('');

    const [denunciaImage, setDenunciaImage] = useState(null);
    const [fotoImage, setFotoImage] = useState(null);

    const setImages = (image, type) => {
        if (type == 'denuncia') {
            setDenunciaImage(image);
            register_Data.setDocumento_id(image);
        }
        else {
            setFotoImage(image);
            register_Data.setImage(image);
        }

        console.log(register_Data);
    };
    return (

        <View style={{ flex: 1 }}>
            <View style={styles.card}>
                <View style={{ flex: 10
                    // , backgroundColor: 'purple'
                    }}>
                    {/* <FlatList> */}
                    <ScrollView>
                        <View style={{ flex: 1}}>
                            <UploadPhoto setImages={setImages} />
                        </View>
                        <View style={{ flex: 1}}>
                            
                            {/* <RegisterUbication ubication_selected={(val) => setUbication(val)} exist_ubication={ubication!= ''? true: false} /> */}
                            <RegisterUbication ubication_selected={(val)=> {setUbication(val), register_Data.setUbicacion(val)}} exist_ubication={ubication!= ''? true: false}/>
                        </View>
                    {/* </FlatList> */}
                    </ScrollView>
                </View>
                <View style={{ marginBottom: -15 }}>
                    <ButtonNext title="Enviar" clickButtonNext={()=> button_next(5)} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1, 
        backgroundColor: Colors.FONDO, 
        margin: 20, 
        borderRadius: 20,
        paddingTop: 15,
        // Propiedades de sombra
        shadowColor: 'black',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 10, // Solo para Android
    },
});
export default AddImagesAndFiles