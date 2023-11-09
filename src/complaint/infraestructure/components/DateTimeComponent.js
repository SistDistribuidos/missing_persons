import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
// import DatePicker from 'react-native-datepicker';
import { useState } from 'react';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import SelectModal from '../ModalSelect';
import useSelected from '../../application/UseSelected';
import { Input, Icon } from '@rneui/themed';

const DateTimeComponent = () => {

    const [date, setDate] = useState(new Date(1598051730000));

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        });
    };
    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    
    const selectNacionality = useSelected();    
    return (
        <View style={{flex:1}}>
            <View style={{flex:1, flexDirection: 'row'}}>
                <View style={{flex:1}}>
                    <TouchableOpacity onPress={showDatepicker}>
                        <Text style={{fontWeight: 'bold', paddingLeft: 30, fontSize: 18}}>Fecha</Text>
                    </TouchableOpacity>
                </View>
                <View  style={{flex:1}}>
                    <TouchableOpacity onPress={showTimepicker}>
                        <Text style={{fontWeight: 'bold', textAlign:'right', paddingRight: 30, fontSize: 18}}>Hora</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:1, marginHorizontal: 20}}>
                <Input
                    placeholder={date.toLocaleString()}
                    rightIcon={{ type: 'font-awesome', name: 'clock-o' }}
                    editable={false}
                />
            </View>
        </View>
    )
}

export default DateTimeComponent