import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Colors from '../domain/Colors'
import InputText from './InputText'
import SelectModal from './ModalSelect'
import useSelected from '../application/UseSelected'
import ModalSelectGenero from './components/ModalSelectGenero'
import ButtonNext from './components/ButtonNext'
// import { ScrollView } from 'react-native-gesture-handler'

const AddInformation = ({register_Data, button_next}) => {

    const select_genero = useSelected();    
    const select_nacionality = useSelected();    
    const select_language = useSelected();    

  return (
    <View style={{flex:1}}>
        <View style={styles.card}>
            <View style={{flex:10}}>
                <ScrollView>
                    <InputText title={'Nombre'} placeHolder={'Joel Matias'} errorMessage='' inputChangeValue={(value)=>register_Data.setNombre(value)} />
                    <ModalSelectGenero
                                title_select='Sexo'
                                labelSelect={select_genero.selectedOption.label}
                                onOptionSelect={select_genero.handleOptionSelect}
                                value_id={(value_id)=> register_Data.setFechas_nacimiento(value_id)}
                            />
                    <SelectModal
                            title_select='Fecha Nacimiento'
                            labelSelect={select_nacionality.selectedOption.label}
                            options={[
                            { id: 1, label: 'Quechua' },
                            { id: 2, label: 'Español' },
                            { id: 3, label: 'Aymara' },
                            { id: 4, label: 'Frances' },
                            ]}
                            onOptionSelect={select_nacionality.handleOptionSelect}
                            value_id={(value_id)=> register_Data.setFechas_nacimiento(value_id)}
                        />
                    <SelectModal
                            title_select='Nacionalidad'
                            labelSelect={select_nacionality.selectedOption.label}
                            options={[
                            { id: 1, label: 'Quechua' },
                            { id: 2, label: 'Español' },
                            { id: 3, label: 'Aymara' },
                            { id: 4, label: 'Frances' },
                            ]}
                            onOptionSelect={select_nacionality.handleOptionSelect}
                            value_id={(value_id)=> register_Data.setFechas_nacimiento(value_id)}
                        />
                    <SelectModal
                            title_select='Idioma Nativo'
                            labelSelect={select_language.selectedOption.label}
                            options={[
                            { id: 1, label: 'Quechua' },
                            { id: 2, label: 'Español' },
                            { id: 3, label: 'Aymara' },
                            { id: 4, label: 'Frances' },
                            ]}
                            onOptionSelect={select_language.handleOptionSelect}
                            value_id={(value_id)=> register_Data.setFechas_nacimiento(value_id)}
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