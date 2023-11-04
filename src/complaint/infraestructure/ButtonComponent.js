import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@rneui/themed';
const ButtonComponent = ({nameButton, nameIcon, colorButton, buttonPressed}) => {
  console.log('ingresaaaaaa', nameIcon);
  return (
    <View >
      {nameIcon !=undefined?
        <Button
              title={nameButton}
              icon={{
                name: nameIcon,
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 10 }}
              titleStyle={{ fontWeight: '700', fontSize: 13, marginHorizontal: 15}}
              buttonStyle={{
                backgroundColor: colorButton,
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              onPress={buttonPressed}
            />
        :
        <Button
        title={nameButton}
        titleStyle={{ fontWeight: '700', fontSize: 13, marginHorizontal: 15 }}
        buttonStyle={{
          backgroundColor: colorButton,
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 15,
        }}
        containerStyle={{
          // width: 150,
          // marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={buttonPressed}
      />
      }

    </View>
  )
}

export default ButtonComponent