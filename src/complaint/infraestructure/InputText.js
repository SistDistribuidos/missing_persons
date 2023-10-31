import { View, Text } from 'react-native'
import React from 'react'

import { Input, Icon } from '@rneui/themed';

const InputText = ({title, placeHolder, errorMessage}) => {
    
  return (
    <View style={{marginHorizontal: 20}}>
      <Text>{title}</Text>

        {errorMessage?(
            <Input
            placeholder={placeHolder}
            errorStyle={errorMessage ? { color: 'red' } : null}
            errorMessage={errorMessage}
            />
        ):(
            <Input
                placeholder={placeHolder}
                />
        )}

      
    </View>
  )
}

export default InputText