import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
// import DatePicker from 'react-native-datepicker';
import { useState } from 'react';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import useSelected from '../../application/UseSelected';
import { Input, Icon } from '@rneui/themed';

const DateTimeComponent = ({onDateChange, onlyDate, separeAtribbute}) => {

    const [date, setDate] = useState(new Date(1598051730000));

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
        if (!separeAtribbute)
        onDateChange(onlyDate? saveOnlyDate(currentDate) : currentDate);
        else
        onDateChange(saveOnlyDate(currentDate), saveOnlyHour(currentDate));
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

    const getOnlyDate = (date) => {
        const day = date.getDate(); 
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const saveOnlyDate = (date) => {
        const day = date.getDate(); 
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${year}/${month}/${day}`;
    };

    const saveOnlyHour = (date) => {
        const hour = date.getHours(); 
        const minutes = date.getMinutes();
        return `${hour}:${minutes}`;
    };
    
    return (
        <View style={{flex:1}}>
            <View style={{flex:1, flexDirection: 'row'}}>
                <View style={{flex:1}}>
                    <TouchableOpacity onPress={showDatepicker}>
                        <Text style={{fontWeight: 'bold', paddingLeft: 20}}>Fecha</Text>
                    </TouchableOpacity>
                </View>
                {!onlyDate && <View  style={{flex:1}}>
                    <TouchableOpacity onPress={showTimepicker}>
                        <Text style={{fontWeight: 'bold', textAlign:'right', paddingRight: 30}}>Hora</Text>
                    </TouchableOpacity>
                </View>}
            </View>
            <View style={{flex:1, marginHorizontal: 20}}>
                <Input
                    placeholder={onlyDate?getOnlyDate(date):date.toLocaleString()}
                    value={onlyDate?getOnlyDate(date):date.toLocaleString()}
                    rightIcon={ !onlyDate &&
                        <Icon type= 'font-awesome' name= 'clock-o'  onPress={showTimepicker}
                        />
                    }
                    leftIcon={ 
                        <Icon type= 'font-awesome' name= 'calendar' onPress={showDatepicker} 
                        />
                    }
                    editable={false}
                />
            </View>
        </View>
    )
}

export default DateTimeComponent