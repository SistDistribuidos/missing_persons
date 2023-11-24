import { View, StyleSheet, ScrollView, ToastAndroid } from 'react-native'
import React from 'react'
import Colors from '../domain/Colors'
import InputText from './InputText'
import useSelected from '../application/UseSelected'
import ModalSelectGenero from './components/ModalSelectGenero'
import ButtonNext from './components/ButtonNext'
import DateTimeComponent from './components/DateTimeComponent'
import { useEffect, useState } from 'react'
import  { getLanguages, getNationalities } from './../../application/services/ValuesService'
import SelectModal from './components/ModalSelect'
// import { ScrollView } from 'react-native-gesture-handler'

const AddInformation = ({register_Data, button_next}) => {

    const select_genero = useSelected();    
    const select_nacionality = useSelected();    
    const select_language = useSelected();

    const [options_nationality, set_options_nationality] = useState([]);
    const [options_language, set_options_language] = useState([]);

  useEffect(() => {
    chargueNationalities();
    chargeLanguages();
  },[]);

  const chargueNationalities = async (time) => {
    try {
      const listOfNationalities = await getNationalities();
      set_options_nationality([...listOfNationalities]);
    } catch(e) {
      console.log(e);
      if (e instanceof Error && e.message.includes('timeout') && time < 3) {
        setTimeout(() => {
          chargueNationalities(time + 1);
        },5000);
      } else {
        ToastAndroid.show('Fallo al obtener los recursos', ToastAndroid.SHORT);
      }
    }
  };
  
  const chargeLanguages = async (time) => {
    try {
      const listOfLanguages = await getLanguages();
      set_options_language([...listOfLanguages]);
    } catch(e) {
      console.log(e);
      if (e instanceof Error && e.message.includes('timeout') && time < 3) {
        chargeLanguages(time + 1);
      } else {
        ToastAndroid.show('Fallo al obtener los recursos', ToastAndroid.SHORT);
      }
    }
  };

  return (
    <View style={{flex:1}}>
        <View style={styles.card}>
            <View style={{flex:10}}>
                <ScrollView>
                    <InputText title={'Nombre'} placeHolder={'Nombre y apellido'} errorMessage='' inputChangeValue={(value)=>register_Data.setNombre(value)} />
                    <ModalSelectGenero
                                title_select='Sexo'
                                labelSelect={select_genero.selectedOption.label}
                                onOptionSelect={select_genero.handleOptionSelect}
                                value_id={(value_id)=> register_Data.setGenero(value_id)}
                            />
                    <DateTimeComponent onlyDate={true} onDateChange={(value) => register_Data.setFechas_nacimiento(value)} />
                    <SelectModal
                            title_select='Nacionalidad'
                            labelSelect={select_nacionality.selectedOption.label}
                            options={ options_nationality }
                            onOptionSelect={select_nacionality.handleOptionSelect}
                            value_id={(value_id)=> {register_Data.setNacionalidad_id(value_id)}}
                        />
                    <SelectModal
                            title_select='Idioma Nativo'
                            labelSelect={select_language.selectedOption.label}
                            options={options_language}
                            onOptionSelect={select_language.handleOptionSelect}
                            value_id={(value_id)=> register_Data.setIdioma_id(value_id)}
                        />
                
                </ScrollView>
            </View>
            <View style={{marginBottom:-15}}> 
                <ButtonNext clickButtonNext={()=> button_next(2)} title="Siguiente"/>
            </View>
        </View>
           
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
      flex:1, backgroundColor: Colors.FONDO, margin:20, borderRadius:20,
    //   backgroundColor: 'rgb(0, 160, 0)',
    //   borderTopRightRadius: 25,
    //   borderBottomRightRadius: 25,
      paddingTop: 15,
      // Propiedades de sombra
      shadowColor: 'black',
      shadowOffset: { width: 10, height: 10 },
      shadowOpacity:1,
      shadowRadius: 5,
      elevation: 10, // Solo para Android
    },
  });
export default AddInformation