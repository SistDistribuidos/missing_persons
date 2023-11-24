import { View, Text } from 'react-native'
import React from 'react'
import { Dialog } from '@rneui/themed';
import LottieView from "lottie-react-native";
import Colors from '../../complaint/domain/Colors';

const LoadingDialog = ({visible}) => {
  return (
    <View style={{flex: 1}}>
         <Dialog
                    isVisible={visible}
                    // onBackdropPress={() => setShowDialog(!showDialog)}
                >

                    <View style={{ backgroundColor: Colors.FONDO, alignItems: 'center' }}>
                        <View >
                            <LottieView source={require('../../domain/img_animated/loading_yellow.json')} style={{ width: 100, height: 100 }} autoPlay loop />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }}>Cargando Datos!!</Text>
                            <Text style={{ color: Colors.BLACK }}>Es necesario que espere mientras los datos se cargan</Text>
                        </View>
                    </View>

                </Dialog>
    </View>
  )
}

export default LoadingDialog