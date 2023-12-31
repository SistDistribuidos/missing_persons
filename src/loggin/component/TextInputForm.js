import React, { useState } from 'react';
import {Icon, Input} from '@rneui/themed';
// import { Input, Icon } from '@rneui/themed';
import { StyleSheet, TouchableOpacity, Image, Text, View, TextInput } from 'react-native';
// import Icon2, { Icons } from "./Icons";
import * as Animatable from "react-native-animatable";
import Colors from '../../complaint/domain/Colors';

const TextInputForm = (props) => {
    // console.log('*************', props.bolError)
    // const [password, setpassword] = useState(props.is_password)
    return (
    <View style={{paddingRight: 20, paddingLeft: 20, justifyContent: 'center', 
    alignItems: 'center'}} >
        <Input
            // placeholderTextColor= {Colors.LIGHTPRIMARYCOLOR}
            placeholder= {props.placeholder} 
            containerStyle= {{marginBottom : 20, borderRadius: 26}}
            secureTextEntry= {props.secureTextEntry}
            leftIcon={
                <Animatable.View animation="bounceIn" >
                    <Icon size={24} color={Colors.RED} style={{paddingLeft:15}}
                    type={'font-awesome'} name={props.icon_image}/>
                </Animatable.View>
            }
            rightIcon={props.is_password?
                <TouchableOpacity activeOpacity = {0.8} style={styles.btnVisibility} onPress={props.onPress}>
                    <Icon size={24} color= {Colors.RED}
                    type={'font-awesome'} name={!props.secureTextEntry? 'eye': 'eye-slash' }/>
                </TouchableOpacity> :
                <></>
            }
            inputStyle= {{fontSize: 18, paddingVertical: 10,
                paddingHorizontal: 8, marginTop: 12,
                color: Colors.BLACK,
                // fontFamily: "Poppins-Light"
            }}
            leftContainerStyle= {{marginLeft:0}}

            errorStyle={{color: Colors.RED}}
            errorMessage= {(props.bolError)? props.strError: ''}
            editable= {props.editable}
            keyboardType= {props.keyboardType}
            onChangeText={props.onChangeText}
            value={props.value}
        />
    </View>
    )
};

export default TextInputForm;

const styles = StyleSheet.create({
    btnVisibility:{        
        height: 40,
        width: 35,
        paddingTop: 8,
        paddingLeft:5,
        paddingRight:5
    },
    btnImage:{        
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
    }
});