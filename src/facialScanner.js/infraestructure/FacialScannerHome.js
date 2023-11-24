import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import * as MediaLibrary from 'expo-media-library'
import ButtonComponent from '../../complaint/infraestructure/ButtonComponent';
import Button from './components/Button';

export default function FacialScannerHome({send_photo}) {
    const [hasPermission, setHasPermission] = useState(null);
    const [image, setImage] = useState(null)
    // const [type, setType] = useState(CameraType.back);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)
    const cameraRef = useRef(null);


    // const [permission, requestPermission] = Camera.useCameraPermissions();

    //   if (!permission) ... 

    useEffect(() => {
        (async () => {
            MediaLibrary.requestPermissionsAsync();
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setHasPermission(cameraStatus.status === 'granted')
            // const { status } = await Camera.requestCameraPermissionsAsync();
            // setHasPermission(status === 'granted');
        })();

        // return () => {
        //     Camera.release; // Liberar la cámara cuando el componente se desmonta
        //   };
    }, []);

    //   if (!permission.granted) ... 

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    const takePicture = async () => {
        console.log('ingresa', cameraRef.current);
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            console.log(photo);
            setImage(photo.uri);
            // Aquí puedes manejar la foto capturada, por ejemplo, guardarla o mostrarla en tu interfaz de usuario.
        }
    };
    
    const saveImage = async () => {
        console.log('ingresa', cameraRef.current);
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            console.log(photo);
            setImage(photo.uri);
            // Aquí puedes manejar la foto capturada, por ejemplo, guardarla o mostrarla en tu interfaz de usuario.
        }
    };
    if (hasPermission === false) {
        return <Text>sin acceso a camara</Text>
    }

    return (
        <View style={styles.container}>
            {image == null ?
                <Camera
                    // onMountError={}
                    style={styles.camera}
                    type={type}
                    FlashMode={flash}
                    ref={cameraRef}
                >
                </Camera>
                :
                <Image source={{ uri: image }} style={styles.camera} />
            }
            {
                image == null ?
                    <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', margin: 8 }}>
                        <Button title={'tomar foto'} icon='camera' onPresss={takePicture} />
                        <Button title={'volver'} icon='retweet' onPresss={()=> send_photo(null)} />

                    </View>
                    :
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 50 }}>
                        <Button title={'volver'} icon='retweet' onPresss={()=> setImage(null)} />
                        <Button title={'Guardar'} icon='check' onPresss={()=>send_photo(image)} />
                    </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        padding: 8
    },
    camera: {
        flex: 1,
        width: '100%',
        borderRadius: 20
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18, marginBottom: 10, color: 'white'
    }
}); 