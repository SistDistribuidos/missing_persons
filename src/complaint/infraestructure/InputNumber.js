import { View, Text } from 'react-native'
import React from 'react'

import { Input, Icon } from '@rneui/themed';

const InputNumber = ({title, placeHolder, errorMessage, inputChangeValue, style}) => {
    
  return (
    <View style={[{ marginHorizontal: 20 }, style]}>
      <Text style={{fontWeight: 'bold'}}>{title}</Text>

        {errorMessage?(
            <Input
            placeholder={placeHolder}
            errorStyle={errorMessage ? { color: 'red' } : null}
            errorMessage={errorMessage}
            onChangeText={inputChangeValue}
            />
        ):(
            <Input
                placeholder={placeHolder}
                onChangeText={inputChangeValue}
                keyboardType={'numeric'}
                />
        )}

      
    </View>
  )
}

export default InputNumber
