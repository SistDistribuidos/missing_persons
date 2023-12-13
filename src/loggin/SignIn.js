import { View, Text, StatusBar, SafeAreaView, KeyboardAvoidingView, ScrollView, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import ComponentHeader from '../complaint/infraestructure/components/ComponentHeader'
import Colors from '../complaint/domain/Colors'
import * as Animatable from 'react-native-animatable';
import TextInputForm from './component/TextInputForm';
import { Button } from '@rneui/themed';
import { useSelector, useDispatch } from "react-redux";
import { setAuthentication } from './redux/Actions';
import { login, signup } from '../application/services/ValuesService';
import { saveToken, getValueForToken, deleteValueForToken } from "../application/secureStore/ExpoSecureStore";
import { useNavigation } from '@react-navigation/native';

const Signin = () => {
    const dispatch = useDispatch();
    const [buttonLoading, setButtonLoading] = useState(false)
    const [form, setform] = useState({
        username: '',
        email: '',
        password: '',
        user_error: '',
        password_error: '',
    })
    const handleInputChange = (event) => {
        setform((prevForm) => ({
            ...prevForm,
            [event.type]: event.value,
        }));
    };
    const [hidePassword, setHidePassword] = useState(true);
    const navigation = useNavigation();
    const login_auth = () => {

        setButtonLoading(true);
        let response = signup(form)
            .then((data) => {
                if (data) {
                    console.log('La data retorna', data);
                    ToastAndroid.show('Usuario registrado', ToastAndroid.SHORT);
                    navigation.navigate('Loggin');
                }
            })
            .catch((error) => {
                console.log('ingresa mal, error login', error)
                dispatch(setAuthentication(false))
            }).finally(() => {
                setButtonLoading(false);
            });
    };

    const redirectToLogin = () => {
        navigation.navigate('Loggin');
    }

    return (
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>
            <StatusBar style="light" backgroundColor={Colors.RED} />
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView
                    contentContainerStyle={[
                        loginStyles.container,
                        { backgroundColor: Colors.WHITE_FONDO },
                    ]}
                >
                    <View style={loginStyles.contain_logo}>
                        <Animatable.Image
                            source={require("../domain/assets/logo-brainapps.jpg")}
                            animation="pulse"
                            easing="ease-out"
                            iterationCount="infinite"
                            style={{
                                height: 200,
                                width: 330,
                                resizeMode: "contain",
                                marginTop: 40,
                                borderRadius: 25
                            }}
                        />
                    </View>
                    <Animatable.View animation="bounceIn">
                        <TextInputForm
                            keyboardType="default"
                            placeholder="Nombre de usuario"
                            icon_image="user"
                            onChangeText={(value) => handleInputChange({ value: value, type: 'username' })}
                            icon_font="Icons.FontAwesome"
                            strError={form.user_error}
                            bolError={true}
                        />
                        <TextInputForm
                            keyboardType="email-address"
                            placeholder="Correo electronico"
                            icon_image="user"
                            onChangeText={(value) => handleInputChange({ value: value, type: 'email' })}
                            icon_font="Icons.FontAwesome"
                            strError={form.user_error}
                            bolError={true}
                        />

                        <TextInputForm
                            keyboardType="default"
                            placeholder="Contraseña"
                            icon_image="lock"
                            onChangeText={(value) => handleInputChange({ value: value, type: 'password' })}
                            icon_font="Icons.FontAwesome"
                            is_password={true}
                            onPress={() => setHidePassword(!hidePassword)}
                            secureTextEntry={hidePassword}
                            strError={form.password_error}
                            bolError={true}
                        />
                    </Animatable.View>
                    <Animatable.View
                        style={loginStyles.contain_footer}
                        animation="bounceIn"
                    >
                        <Button
                            onPress={() => { login_auth() }}
                            title="REGISTRARSE"
                            loading={buttonLoading}
                            loadingProps={{
                                size: '25',
                                color: 'white',
                            }}
                            buttonStyle={loginStyles.btnMain}
                            containerStyle={loginStyles.btntxt}
                            titleStyle={{ fontWeight: 'bold' }}
                            icon={{
                                name: 'arrow-right',
                                type: 'font-awesome',
                                size: 15,
                                color: 'white',
                            }}
                            iconRight
                            iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
                        />
                        {/* <TouchableOpacity onPress={() => login_auth()}>
                    <View style={loginStyles.btnMain}>
                    <Text style={loginStyles.btntxt}>Iniciar Sesion</Text>
                    </View>
                </TouchableOpacity> */}
                        <View>
                            <TouchableOpacity
                                onPress={redirectToLogin}
                            >
                                <Text
                                    style={[
                                        loginStyles.txtTransparent,
                                        { textDecorationLine: "underline" },
                                    ]}
                                >
                                    Inicia sesion
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Animatable.View>
                </ScrollView>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}
const loginStyles = StyleSheet.create({

    container: {
        // flex: 1,
        flexGrow: 1,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    contain_logo: {
        // backgroundColor:Colors.BLACK,
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
        // width: 'auto',
    },
    contain_form: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: Colors.BLUE,
    },
    contain_footer: {
        flex: 1,
        // backgroundColor: Colors.GRAY,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        paddingTop: 50,
        alignItems: 'center',
        borderRadius: 26,
    },

    btnMain: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        width: 280,
        marginTop: 40,
        marginBottom: 20,
        backgroundColor: Colors.RED,
        borderRadius: 18
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: Colors.BLUE,
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: Colors.WHITE,
        paddingVertical: 15,
        // fontFamily: 'Poppins-Bold',
    },

    txtTransparent: {
        color: Colors.RED,
        fontSize: 14,
    }
})
export default Signin;
