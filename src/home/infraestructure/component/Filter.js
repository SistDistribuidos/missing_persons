import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../../complaint/domain/Colors'
import { Picker } from '@react-native-picker/picker';
import { Button, ButtonGroup, withTheme, Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
const Filter = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View style={{ width: '100%', height: 40 }}>
            <View style={{ flex: 1, flexDirection: 'row', paddingTop: 4 }}>

                <View style={{ flex: 2, borderRadius: 16, borderColor: Colors.BLACK_DEGRADADO, borderWidth: 2, margin: 2, justifyContent: 'center', alignContent: 'center', marginLeft: 20 }}>
                    <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }

                    >
                        <Picker.Item label="Recientes" value="1" />
                        <Picker.Item label="Antiguos" value="2" />
                        <Picker.Item label="1 semana" value="3" />
                        <Picker.Item label="1 mes" value="4" />
                    </Picker>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', flexDirection: 'row-reverse' }}>
                    <TouchableOpacity onPress={()=> console.log('good')} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="filter" type="font-awesome" size={20} color="black" style={{ marginRight: 5 }} />
                        <Text>Filtro</Text>
                    </TouchableOpacity>
                </View>

            </View>
            {/* </View> */}
        </View>
    )
}

export default Filter